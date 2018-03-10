import { Component, ViewChild } from '@angular/core';
import { LaunchService } from '../../../services/launch.service';
import { LaunchpadService } from '../../../services/launchpad.service';
import { ActivatedRoute } from '@angular/router';
import { Observer } from 'rxjs/Observer';
import { URLSearchParams } from '@angular/http';
//import { AgmMap } from '@agm/core';

@Component({
    selector: 'launches-detail-component',
    templateUrl: './launches-detail.component.html',
    styleUrls: [
        './launches-detail.component.css'
    ]
})

export class LaunchesDetailComponent {
    //@ViewChild(AgmMap)
    //public agmMap: AgmMap;

    id: string;
    launch: any;
    launchpad: any;

    launchSub: any;
    launchpadSub: any;
    routeSub: any;

    constructor(private launchService: LaunchService,
                private launchpadService: LaunchpadService,
                private route: ActivatedRoute) {
        
        this.routeSub = this.route.params.subscribe(params => {
            this.id = params['id'];
            this.getRocket();
        });
    }

    private getRocket(): void {
        if (this.launchSub) this.launchSub.unsubscribe();
        this.launchService.getById(this.id)
            .subscribe(
                res => {
                    this.launch = res[0];
                    this.getLaunchpad(res[0].launch_site.site_id);
                },
                err => { console.log(err); }
            );
    }

    private getLaunchpad(id: string): void {
        if (this.launchpadSub) this.launchpadSub.unsubscribe();
        this.launchpadService.getById(id)
            .subscribe(
                res => {
                    this.launchpad = res;
                    //this.agmMap.triggerResize();
                },
                err => { console.log(err); }
            );
    }
}