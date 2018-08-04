import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
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
      navIconClass: 'fas fa-home',
      state: 'home'
    }
  }
  // , {
  //   path: 'cores',
  //   component: CoresComponent,
  //   children: [
  //     { path: '', redirectTo: 'all', pathMatch: 'full' },
  //     {
  //       path: 'all',
  //       component: AllCoresComponent,
  //       data: {
  //         pageTitle: 'Cores',
  //         pageSubtitle: 'A list containing all rocket core components.'
  //       }
  //     }, {
  //       path: ':id',
  //       component: CoresDetailComponent,
  //       data: {
  //         pageTitle: 'cd',
  //         pageSubtitle: ' '
  //       }
  //     }
  //   ]
  // }
  , {
    path: 'launches',
    component: AllLaunchesComponent,
    data: {
      navIconClass: 'launch-icon',
      pageTitle: 'Launches',
      pageSubtitle: 'All previous and future launches.',
      state: 'launches'
    }
  }, {
    path: 'launches/:id',
    component: LaunchDetailComponent,
    data: {
      pageTitle: 'Launch',
      pageSubtitle: 'Bleep bloop',
      state: 'launch'
    }
  }, {
    path: 'rockets',
    component: RocketsComponent,
    data: {
      navIconClass: 'fas fa-rocket',
      pageTitle: 'Rockets',
      pageSubtitle: 'Detailed information regarding all SpaceX rockets.',
      state: 'rockets'
    }
  }, {
    path: 'rockets/:id',
    component: RocketsDetailComponent,
    data: {
      pageTitle: 'Rocket',
      pageSubtitle: 'Bleep bloop',
      state: 'rocket'
    }
  }
  // ,{
  //   path: 'craft',
  //   component: CraftComponent,
  //   data: {
  //     navIconClass: 'fas fa-rocket',
  //     pageTitle: 'Vehicles',
  //     pageSubtitle: 'Vehicles designed and produced by SpaceX.',
  //     state: 'vehicles'
  //   },
  //   children: [
  //     { path: '', redirectTo: 'all', pathMatch: 'full' },
  //     {
  //       path: 'all',
  //       component: AllCraftComponent,
  //       data: {
  //         pageTitle: 'Craft',
  //         pageSubtitle: 'Craft designed and produced by SpaceX.'
  //       }
  //     }, {
  //       path: 'rockets',
  //       component: RocketsComponent,
  //       data: {
  //         pageTitle: 'Rockets',
  //         pageSubtitle: 'Detailed information regarding all SpaceX rockets.'
  //       }
  //     }, {
  //       path: 'rockets/:id',
  //       component: RocketsDetailComponent,
  //       data: {
  //         pageTitle: 'rd',
  //         pageSubtitle: ' '
  //       }
  //     }, {
  //       path: 'capsules',
  //       component: CapsulesComponent,
  //       data: {
  //         pageTitle: 'Capsules',
  //         pageSubtitle: 'Detailed information regarding all SpaceX capsules.'
  //       }
  //     }
  //   ]
  // }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {useHash: false})]
})
export class AppRoutingModule { }
