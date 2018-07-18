import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { CraftComponent } from './component/craft/craft.component';
import { LaunchesComponent } from './component/launches/launches.component';
import { RocketsComponent } from './component/craft/rockets/rockets.component';
import { RocketsDetailComponent } from './component/craft/rockets/rockets-detail/rockets-detail.component';
import { CapsulesComponent } from './component/craft/capsules/capsules.component';
import { AllCraftComponent } from './component/craft/all/all-craft.component';
import { AllLaunchesComponent } from './component/launches/all/all-launches.component';
import { LaunchesDetailComponent } from './component/launches/launches-detail/launches-detail.component';
import { CoresComponent } from './component/cores/cores.component';
import { AllCoresComponent } from './component/cores/all/all-cores.component';
import { CoresDetailComponent } from './component/cores/cores-detail/cores-detail.component';
import { PageTitleComponent } from './component/page-title-subtitle/page-title/page-title.component';
import { PageSubtitleComponent } from './component/page-title-subtitle/page-subtitle/page-subtitle.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';

import { LaunchService } from './service/launch.service';
import { LaunchpadService } from './service/launchpad.service';
import { RocketService } from './service/rocket.service';
import { CapsuleService } from './service/capsule.service';
import { CoreService } from './service/core.service';
import { InfoService } from './service/info.service';

import { SafePipe } from './pipe/safe.pipe';
import { CardinalPipe } from './pipe/cardinal.pipe';
import { HttpsPipe } from './pipe/https.pipe';
import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent,
    data: {
      pageTitle: 'About this app and SpaceX',
      pageSubtitle: 'Including what you never dared to ask',
      cover_image: 'mars',
      navIconClass: 'fas fa-home'
    }
  }, {
    path: 'cores',
    component: CoresComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      {
        path: 'all',
        component: AllCoresComponent,
        data: {
          pageTitle: 'Cores',
          pageSubtitle: 'A list containing all rocket core components.'
        }
      }, {
        path: ':id',
        component: CoresDetailComponent,
        data: {
          pageTitle: 'cd',
          pageSubtitle: ' '
        }
      }
    ]
  }, {
    path: 'launches',
    component: LaunchesComponent,
    data: {
      navIconClass: 'launch-icon',
      pageTitle: 'Launches',
      pageSubtitle: 'All previous and future launches.',
    },
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      {
        path: 'all',
        component: AllLaunchesComponent,
        data: {
          pageTitle: 'Launches',
          pageSubtitle: 'All previous and future launches.'
        }
      }, {
        path: ':id',
        component: LaunchesDetailComponent,
        data: {
          pageTitle: 'ld',
          pageSubtitle: ' '
        }
      }
    ]
  }, {
    path: 'craft',
    component: CraftComponent,
    data: {
      navIconClass: 'fas fa-rocket',
      pageTitle: 'Vehicles',
      pageSubtitle: 'Vehicles designed and produced by SpaceX.'
    },
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      {
        path: 'all',
        component: AllCraftComponent,
        data: {
          pageTitle: 'Craft',
          pageSubtitle: 'Craft designed and produced by SpaceX.'
        }
      }, {
        path: 'rockets',
        component: RocketsComponent,
        data: {
          pageTitle: 'Rockets',
          pageSubtitle: 'Detailed information regarding all SpaceX rockets.'
        }
      }, {
        path: 'rockets/:id',
        component: RocketsDetailComponent,
        data: {
          pageTitle: 'rd',
          pageSubtitle: ' '
        }
      }, {
        path: 'capsules',
        component: CapsulesComponent,
        data: {
          pageTitle: 'Capsules',
          pageSubtitle: 'Detailed information regarding all SpaceX capsules.'
        }
      }
    ]
  }
 ];

@NgModule({
  declarations: [
    SafePipe,
    HttpsPipe,
    CardinalPipe,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LaunchesComponent,
    CraftComponent,
    RocketsComponent,
    RocketsDetailComponent,
    CapsulesComponent,
    AllCraftComponent,
    AllLaunchesComponent,
    LaunchesDetailComponent,
    CoresComponent,
    AllCoresComponent,
    CoresDetailComponent,
    PageTitleComponent,
    PageSubtitleComponent,
    SideBarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: false}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDsCE5gAJnCw2LEBvCQRXWCn3ne-S5lZEw'
    }),
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [],
    BrowserAnimationsModule
  ],
  providers: [
    InfoService,
    LaunchService,
    LaunchpadService,
    RocketService,
    CapsuleService,
    CoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
