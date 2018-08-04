import { TestBed, async } from '@angular/core/testing';
import {AppModule} from '../../../app.module';
import {APP_BASE_HREF} from '@angular/common';
import {PageTitleComponent} from './page-title.component';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs/internal/observable/of';
import {Observable} from 'rxjs/internal/Observable';
import {take} from 'rxjs/operators';

describe('PageTitleComponent', () => {
  let params: Observable<any>;
  let data: Observable<any>;
  const mockTitle = 'SpaceX Monitor FTW';

  beforeEach(async(() => {
    params = of({});

    data = of({ pageTitle: mockTitle });

    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{ provide: APP_BASE_HREF, useValue : '/' },
                  { provide: ActivatedRoute, useValue: {params, data} }]

    }).compileComponents();
  }));

  it('should create the page-title component', async(() => {
    const fixture = TestBed.createComponent(PageTitleComponent);
    const pageTitle = fixture.debugElement.componentInstance;
    expect(pageTitle).toBeTruthy();
  }));

  it(`should display the page title`, async(() => {
    const fixture = TestBed.createComponent(PageTitleComponent);
    fixture.detectChanges();
    const pageTitle = fixture.debugElement.componentInstance;
    pageTitle.title$.pipe(
      take(1)
    ).subscribe(
      title => expect( title ).toEqual( mockTitle ) );
  }));
});
