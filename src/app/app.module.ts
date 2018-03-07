import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CraftComponent } from './components/craft/craft.component';
import { LaunchesComponent } from './components/launches/launches.component';

import { LaunchService } from './services/launch.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'launches', component: LaunchesComponent },
  { path: 'craft', component: CraftComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LaunchesComponent,
    CraftComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    LaunchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
