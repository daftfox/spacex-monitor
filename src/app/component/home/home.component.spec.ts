import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { AppModule } from '../../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { take } from 'rxjs/operators';

describe('HomeComponent', () => {
  let componentFixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers: [ { provide: APP_BASE_HREF, useValue : '/' } ]

    }).compileComponents();

    componentFixture = TestBed.createComponent( HomeComponent );
  }));

  it('should create the home component', async(() => {
    const homeComponent = componentFixture.debugElement.componentInstance;
    expect( homeComponent ).toBeTruthy();
  }));

  it(`should have loaded SpaceX info`, async(() => {
    const homeComponent = componentFixture.debugElement.componentInstance;
    homeComponent.spacex$.pipe(
      take( 1 )
    ).subscribe(
      spacex => expect( spacex ).not.toBeNull()
    );
  }));
});

