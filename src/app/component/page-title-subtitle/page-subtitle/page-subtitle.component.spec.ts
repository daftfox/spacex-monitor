import { TestBed, async } from '@angular/core/testing';
import {AppModule} from '../../../app.module';
import {APP_BASE_HREF} from '@angular/common';
import {PageSubtitleComponent} from './page-subtitle.component';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs/internal/observable/of';
import {Observable} from 'rxjs/internal/Observable';
import {take} from 'rxjs/operators';

describe('PageTitleComponent', () => {
  let params: Observable<any>;
  let data: Observable<any>;
  const mockSubtitle = 'The best space agency in the world';

  beforeEach(async(() => {
    params = of({});

    data = of({ pageSubtitle: mockSubtitle });

    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{ provide: APP_BASE_HREF, useValue : '/' },
        { provide: ActivatedRoute, useValue: {params, data} }]

    }).compileComponents();
  }));

  it('should create the page-subtitle component', async(() => {
    const fixture = TestBed.createComponent(PageSubtitleComponent);
    const pageSubtitle = fixture.debugElement.componentInstance;
    expect( pageSubtitle ).toBeTruthy();
  }));

  it(`should display the page subtitle`, async(() => {
    const fixture = TestBed.createComponent(PageSubtitleComponent);
    fixture.detectChanges();
    const pageSubtitle = fixture.debugElement.componentInstance;
    pageSubtitle.subtitle$.pipe(
      take(1)
    ).subscribe(
      title => expect( title ).toEqual( mockSubtitle ) );
  }));
});
