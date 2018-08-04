import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppModule} from '../../app.module';
import {APP_BASE_HREF} from '@angular/common';
import {SideBarComponent} from './side-bar.component';

describe('SideBarComponent', () => {
  let componentFixture: ComponentFixture<SideBarComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();

    componentFixture = TestBed.createComponent( SideBarComponent );
  }));

  it('should create the side bar component', async(() => {
    const sideBarComponent = componentFixture.debugElement.componentInstance;
    expect( sideBarComponent ).toBeTruthy();
  }));

  it(`should contain a route`, async(() => {
    const sideBarComponent = componentFixture.debugElement.componentInstance;
    expect( sideBarComponent.routes.length ).toBeGreaterThan( 0 );
  }));

  it(`routes should contain a route to home`, async(() => {
    const sideBarComponent = componentFixture.debugElement.componentInstance;
    expect( sideBarComponent.routes.find( route => route.path === 'home' ) ).not.toBeUndefined();
  }));

  it(`home route should contain correct nabIconClass`, async(() => {
    const sideBarComponent = componentFixture.debugElement.componentInstance;
    expect( sideBarComponent.routes.find( route => route.path === 'home' ).data.navIconClass )
      .toEqual( 'fas fa-home' );
  }));

  it(`should display three menu buttons`, async(() => {
    componentFixture.detectChanges();
    const element = componentFixture.debugElement.nativeElement;
    expect( element.querySelectorAll( '.buttons > div' ).length )
      .toEqual( 3 );
  }));

  it(`should display the correct navIconClass in the first button`, async(() => {
    componentFixture.detectChanges();
    const element = componentFixture.debugElement.nativeElement;
    expect( element.querySelector( '.buttons > div > i' ).classList.contains('fas') )
      .toBeTruthy();
    expect( element.querySelector( '.buttons > div > i' ).classList.contains('fa-home') )
      .toBeTruthy();
  }));
});
