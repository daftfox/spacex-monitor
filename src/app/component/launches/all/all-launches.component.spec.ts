import {TestBed, async, ComponentFixture, fakeAsync} from '@angular/core/testing';
import { AllLaunchesComponent } from './all-launches.component';
import { AppModule } from '../../../app.module';
import { APP_BASE_HREF } from '@angular/common';
import {take} from 'rxjs/operators';
import {LaunchService} from '../../../service/launch.service';
import {of} from 'rxjs/internal/observable/of';
import {LaunchpadService} from '../../../service/launchpad.service';
import {RocketService} from '../../../service/rocket.service';

describe('AllLaunchesComponent', () => {
  let componentFixture: ComponentFixture<AllLaunchesComponent>;
  const launchService = {
    get() {
      const launches = [
        {
          flightNumber: 1,
          missionName: 'FalconSat',
          links: {
            missionPatchSmall: 'https://i.imgur.com/zYP5soX.jpg'
          }
        },
        {
          flightNumber: 2,
          missionName: 'DemoSat',
          links: {
            missionPatchSmall: 'https://i.imgur.com/zYP5soX.jpg'
          }
        }
      ];
      return of( launches );
    }
  };

  const launchpadService = {
    get() {
      const launchpads = [
        {
          id: 'kwajalein_atoll',
          fullName: 'Kwajalein Atoll Omelek Island'
        }
      ];
      return of( launchpads );
    }
  };

  const rocketService = {
    get() {
      const rockets = [
        {
          id: 'falcon1',
          name: 'Falcon 1'
        }
      ];
      return of( rockets );
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers: [
        { provide: APP_BASE_HREF, useValue:  '/' },
        { provide: LaunchService, useValue: launchService},
        { provide: LaunchpadService, useValue: launchpadService},
        { provide: RocketService, useValue: rocketService}
      ]

    }).compileComponents();

    componentFixture = TestBed.createComponent( AllLaunchesComponent );
  }));

  it('should create the all launches component', async(() => {
    const allLaunchesComponent = componentFixture.debugElement.componentInstance;
    expect( allLaunchesComponent ).toBeTruthy();
  }));

  it(`should have received a launch`, async(() => {
    const allLaunchesComponent = componentFixture.debugElement.componentInstance;
    allLaunchesComponent.launches$.pipe(
      take( 1 )
    ).subscribe(launches => expect( launches[0].missionName ).toEqual( 'FalconSat' ) );
  }));

  it(`should display two launches`, fakeAsync(() => {
    componentFixture.detectChanges();
    const element = componentFixture.debugElement.nativeElement;
    expect( element.querySelectorAll( '.list-element' ).length )
      .toEqual( 2 );
  }));

  it(`should display the mission name as title`, async(() => {
    componentFixture.detectChanges();
    const element = componentFixture.debugElement.nativeElement;
    expect( element.querySelector( '.list-element .title h3' ).textContent )
      .toEqual( 'FalconSat' );
  }));
});

