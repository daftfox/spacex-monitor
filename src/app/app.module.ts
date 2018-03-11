import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ServiceWorkerModule } from '@angular/service-worker'

import { AgmCoreModule } from '@agm/core';
import { EmbedVideo } from 'ngx-embed-video';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CraftComponent } from './components/craft/craft.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { RocketsComponent } from './components/craft/rockets/rockets.component';
import { RocketsDetailComponent } from './components/craft/rockets/rockets-detail/rockets-detail.component';
import { CapsulesComponent } from './components/craft/capsules/capsules.component';
import { AllCraftComponent } from './components/craft/all/all-craft.component';
import { AllLaunchesComponent } from './components/launches/all/all-launches.component';
import { LaunchesDetailComponent } from './components/launches/launches-detail/launches-detail.component';
import { CoresComponent } from './components/cores/cores.component';
import { AllCoresComponent } from './components/cores/all/all-cores.component';
import { CoresDetailComponent } from './components/cores/cores-detail/cores-detail.component';

import { LaunchService } from './services/launch.service';
import { LaunchpadService } from './services/launchpad.service';
import { RocketService } from './services/rocket.service';
import { CapsuleService } from './services/capsule.service';
import { CoreService } from './services/core.service';

import { SafePipe } from './pipes/safe.pipe';
import { HttpsPipe } from './pipes/https.pipe';
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
          cover_image: 'liftoff'
        }
      },
      { 
        path: ':id', 
        component: CoresDetailComponent,
        data: {
          pageTitle: 'cd', 
          subTitle: ' ',
          cover_image: 'liftoff'
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
    AppComponent,
    HeaderComponent,
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
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDsCE5gAJnCw2LEBvCQRXWCn3ne-S5lZEw'
    }),
    EmbedVideo.forRoot(),
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [
    LaunchService,
    LaunchpadService,
    RocketService,
    CapsuleService,
    CoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .then(() => {
//     if ('serviceWorker' in navigator) {
//       navigator.serviceWorker
//     }
//   })
