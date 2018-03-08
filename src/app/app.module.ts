import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CraftComponent } from './components/craft/craft.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { RocketsComponent } from './components/craft/rockets/rockets.component';

import { LaunchService } from './services/launch.service';
import { LaunchpadService } from './services/launchpad.service';
import { RocketService } from './services/rocket.service';

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
    data: {
      pageTitle: 'Launches', 
      subTitle: 'A list containing all launches SpaceX has performed and will perform.',
      cover_image: 'liftoff'
    } 
  }, { 
    path: 'craft', 
    component: CraftComponent,
    children: [
      { path: '', redirectTo: 'rockets', pathMatch: 'full' },
      { path: 'rockets', component: RocketsComponent }
    ]
  }
 ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LaunchesComponent,
    CraftComponent,
    RocketsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    LaunchService,
    LaunchpadService,
    RocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
