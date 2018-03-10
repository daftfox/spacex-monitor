import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { RocketService } from './services/rocket.service';
import { LaunchService } from './services/launch.service';
import 'rxjs/add/operator/filter';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = '';
  subTitle = '';
  coverImage = '';

  rocketSub: any;
  launchSub: any;

  constructor(private router: Router,
              private launchService: LaunchService,
              private rocketService: RocketService) {
    
  }

  ngOnInit() {
    this.router.events
        .filter((event: any) => event instanceof NavigationEnd)
        .subscribe(() => {
            var root = this.router.routerState.snapshot.root;
            while (root) {
                if (root.children && root.children.length) {
                    root = root.children[0];
                } else if (root.data && 
                           root.data["pageTitle"] && 
                           root.data["cover_image"] &&
                           root.data["subTitle"]) {
                    this.pageTitle = root.data["pageTitle"];
                    this.subTitle = root.data["subTitle"];
                    this.coverImage = root.data["cover_image"];
                    this.getDynamicPageTitle();
                    return;
                } else {
                    return;
                }
            }
        });
  }

  private getRocket(id: string): void {
    if (this.rocketSub) this.rocketSub.unsubscribe();
    this.rocketService.getById(id)
        .subscribe(
            res => { 
                this.pageTitle = res.name;
                this.subTitle = `First flight: ${moment(res.first_flight).format('MMMM Do YYYY')}`;
                this.coverImage = res.id;
            },
            err => { console.log(err); }
        );
  }

  private getLaunch(id: string): void {
    if (this.launchSub) this.launchSub.unsubscribe();
    this.launchService.getById(id)
        .subscribe(
            res => {
                console.log(res[0]);
                this.pageTitle = `Launch number: ${res[0].flight_number}`;
                this.subTitle = `Date of launch: ${moment(res[0].launch_date_utc).format('MMMM Do YYYY')}`;
            },
            err => { console.log(err); }
        );
  }

  private getDynamicPageTitle() {
    let id = window.location.href.split('/').slice(-1).pop();
    switch(this.pageTitle) {
        case 'rd':
            this.getRocket(id);
            break;
        case 'ld':
            this.getLaunch(id);
            break;
    }
  }
}
