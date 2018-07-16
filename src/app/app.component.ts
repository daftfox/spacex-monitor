import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RocketService } from './service/rocket.service';
import { LaunchService } from './service/launch.service';
import { filter } from 'rxjs/operators';
import { Launch } from './model/domain/launch.model';
import { Rocket } from './model/domain/rocket.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pageTitle = '';
  subTitle = '';
  coverImage = '';

  rocketSub: any;
  launchSub: any;

  constructor(private router: Router) {

  }

  // todo: abstractify away in separate component and refactor class
  ngOnInit() {
    this.router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd)
      )
      .subscribe(() => {
            let root = this.router.routerState.snapshot.root;
            while (root) {
              if (root.children && root.children.length) {
                root = root.children[0];
              } else if ( root.data &&
                root.data[ 'pageTitle' ] &&
                root.data[ 'cover_image' ] &&
                root.data[ 'subTitle' ] ) {
                this.pageTitle = root.data[ 'pageTitle' ];
                this.subTitle = root.data[ 'subTitle' ];
                this.coverImage = root.data[ 'cover_image' ];
                // this.getDynamicPageTitle();
                return;
              } else {
                return;
              }
            }
          });
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
