import { Component, OnInit } from '@angular/core';
import {routerTransition} from './router.animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ]
})
export class AppComponent implements OnInit {

  constructor() {

  }

  // todo: put code in ngOnInit in separate service that returns an observable
  ngOnInit() {
    // this.router.events
    //   .pipe(
    //     filter((event: any) => event instanceof NavigationEnd)
    //   )
    //   .subscribe(() => {
    //         let root = this.router.routerState.snapshot.root;
    //         while (root) {
    //           if (root.children && root.children.length) {
    //             root = root.children[0];
    //           } else if ( root.data &&
    //             root.data[ 'pageTitle' ] &&
    //             root.data[ 'cover_image' ] &&
    //             root.data[ 'subTitle' ] ) {
    //             return;
    //           } else {
    //             return;
    //           }
    //         }
    //       });
  }

  getState( outlet ) {
    return outlet.activatedRouteData.state;
  }

  // private getDateString( date: string ): string {
  //     let dateString = '';
  //     const dateObj = new Date( date );
  //     dateString += `${dateObj.getDate()}-${dateObj.getMonth() + 1}-${dateObj.getFullYear()}`;
  //     return dateString;
  // }

  // private getRocket( id: string ): void {
  //   if ( this.rocketSub ) { this.rocketSub.unsubscribe(); }
  //   this.rocketService.getById( id )
  //       .subscribe(
  //         ( rocket: Rocket ) => {
  //               this.pageTitle = rocket.name;
  //               this.subTitle = `First flight: ${this.getDateString( rocket.firstFlight )}`;
  //               this.coverImage = rocket.id;
  //           },
  //           err => { console.log(err); }
  //       );
  // }
  //
  // private getLaunch( id: string ): void {
  //   if ( this.launchSub ) { this.launchSub.unsubscribe(); }
  //   this.launchService.getById( id )
  //       .subscribe(
  //         ( launch: Launch ) => {
  //               this.pageTitle = `Launch number: ${launch.flightNumber}`;
  //               this.subTitle = `Date of launch: ${this.getDateString(launch.launchDateUTC)}`;
  //           },
  //           err => { console.log(err); }
  //       );
  // }

  // private getDynamicPageTitle() {
  //   const id = window.location.href.split( '/' ).slice( -1 ).pop();
  //   switch ( this.pageTitle ) {
  //       case 'rd':
  //           this.getRocket( id );
  //           break;
  //       case 'ld':
  //           this.getLaunch( id );
  //           break;
  //   }
  // }
}
