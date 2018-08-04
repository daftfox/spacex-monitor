import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import * as moment from 'moment';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import nl from '@angular/common/locales/nl';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import {OrbitsVisualizedComponent} from './component/orbits-visualized/orbits-visualized.component';
import {PayloadWeightsComponent} from './component/payload-weights/payload-weights.component';

// import { CraftComponent } from './component/craft/craft.component';
import { RocketsComponent } from './component/rockets/rockets.component';
import { RocketsDetailComponent } from './component/rockets/rockets-detail/rockets-detail.component';
// import { CapsulesComponent } from './component/craft/capsules/capsules.component';
// import { AllCraftComponent } from './component/craft/all/all-craft.component';
import { AllLaunchesComponent } from './component/launches/all/all-launches.component';
import { LaunchDetailComponent } from './component/launches/launch-detail/launch-detail.component';
// import { CoresComponent } from './component/cores/cores.component';
// import { AllCoresComponent } from './component/cores/all/all-cores.component';
// import { CoresDetailComponent } from './component/cores/cores-detail/cores-detail.component';
import { PageTitleComponent } from './component/page-title-subtitle/page-title/page-title.component';
import { PageSubtitleComponent } from './component/page-title-subtitle/page-subtitle/page-subtitle.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import {BlueprintComponent} from './component/blueprint/blueprint.component';


import { LaunchService } from './service/launch.service';
import { LaunchpadService } from './service/launchpad.service';
import { RocketService } from './service/rocket.service';
// import { CapsuleService } from './service/capsule.service';
// import { CoreService } from './service/core.service';
import { InfoService } from './service/info.service';

import { SafePipe } from './pipe/safe.pipe';
import { MillionPipe } from './pipe/million.pipe';
import { ThousandPipe } from './pipe/thousand.pipe';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { MomentPipe } from './pipe/moment.pipe';
import { CardinalPipe } from './pipe/cardinal.pipe';
import { HttpsPipe } from './pipe/https.pipe';

import { environment } from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    SafePipe,
    HttpsPipe,
    MillionPipe,
    ThousandPipe,
    CardinalPipe,
    CapitalizePipe,
    MomentPipe,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    // CraftComponent,
    RocketsComponent,
    RocketsDetailComponent,
    // CapsulesComponent,
    // AllCraftComponent,
    AllLaunchesComponent,
    LaunchDetailComponent,
    // CoresComponent,
    // AllCoresComponent,
    // CoresDetailComponent,
    PageTitleComponent,
    PageSubtitleComponent,
    SideBarComponent,
    SpinnerComponent,
    OrbitsVisualizedComponent,
    PayloadWeightsComponent,
    BlueprintComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDsCE5gAJnCw2LEBvCQRXWCn3ne-S5lZEw'
    }),
    YoutubePlayerModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [],
    BrowserAnimationsModule
  ],
  providers: [
    InfoService,
    LaunchService,
    LaunchpadService,
    RocketService,
    // CapsuleService,
    // CoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    moment.locale('us');
    registerLocaleData( nl );
  }
}
