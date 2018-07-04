import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

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
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent,
    data: {
      pageTitle: 'Home',
      subTitle: 'About this app and SpaceX.',
      cover_image: 'mars'
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
          subTitle: 'A list containing all rocket core components.',
          cover_image: 'cores'
        }
      },
      {
        path: ':id',
        component: CoresDetailComponent,
        data: {
          pageTitle: 'cd',
          subTitle: ' ',
          cover_image: 'cores'
        }
      }
    ]
  }, {
    path: 'launches',
    component: LaunchesComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      {
        path: 'all',
        component: AllLaunchesComponent,
        data: {
          pageTitle: 'Launches',
          subTitle: 'A list containing all launches SpaceX has performed and will perform.',
          cover_image: 'liftoff'
        }
      },
      {
        path: ':id',
        component: LaunchesDetailComponent,
        data: {
          pageTitle: 'ld',
          subTitle: ' ',
          cover_image: 'liftoff'
        }
      }
    ]
  }, {
    path: 'craft',
    component: CraftComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      {
        path: 'all',
        component: AllCraftComponent,
        data: {
          pageTitle: 'Craft',
          subTitle: 'Craft designed and produced by SpaceX.',
          cover_image: 'roadster'
        }
      },{
        path: 'rockets',
        component: RocketsComponent,
        data: {
          pageTitle: 'Rockets',
          subTitle: 'Detailed information regarding all SpaceX rockets.',
          cover_image: 'landing'
        }
      },{
        path: 'rockets/:id',
        component: RocketsDetailComponent,
        data: {
          pageTitle: 'rd',
          subTitle: ' ',
          cover_image: ' '
        }
      },{
        path: 'capsules',
        component: CapsulesComponent,
        data: {
          pageTitle: 'Capsules',
          subTitle: 'Detailed information regarding all SpaceX capsules.',
          cover_image: 'capsule'
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
    CoresDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: false}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDsCE5gAJnCw2LEBvCQRXWCn3ne-S5lZEw'
    }),
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
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
