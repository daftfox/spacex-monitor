import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';

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

import { LaunchService } from './services/launch.service';
import { LaunchpadService } from './services/launchpad.service';
import { RocketService } from './services/rocket.service';
import { CapsuleService } from './services/capsule.service';

import { SafePipe } from './pipes/safe.pipe';

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
    LaunchesDetailComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true}),
    AgmCoreModule.forRoot({
      //apiKey: 'AIzaSyBFGtORKXAUM9_mDPfdTuPnP_M9fcWEMOc'
      apiKey: 'AIzaSyDsCE5gAJnCw2LEBvCQRXWCn3ne-S5lZEw'
    })
  ],
  providers: [
    LaunchService,
    LaunchpadService,
    RocketService,
    CapsuleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
