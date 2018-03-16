import { Component } from '@angular/core';
import { LaunchService } from '../../../services/launch.service';
import { LaunchpadService } from '../../../services/launchpad.service';
import { RocketService } from '../../../services/rocket.service';
import { Observer } from 'rxjs/Observer';

@Component({
    selector: 'all-launches-component',
    templateUrl: './all-launches.component.html',
    styleUrls: [
        './all-launches.component.css'
    ]
})

export class AllLaunchesComponent {
    launches: Array<any>;
    launchpads: Array<any>;
    rockets: Array<any>;
    filters = {
        site_id: null,
        launch_success: null,
        rocket_id: null
    };

    launchSub: any;
    launchpadSub: any;
    rocketSub: any;

    constructor(private launchService:    LaunchService,
                private launchpadService: LaunchpadService,
                private rocketService:    RocketService) {
        this.getLaunches();
        this.getLaunchPads();
        this.getRockets();
    }

    reusedCores(cores: any): number {
        const numberOfCores = cores.length;
        const numberOfReusedCores = cores.filter((core)=> core.reused).length;
        return Math.round((numberOfReusedCores / numberOfCores) * 100);
    }

    landedCores(cores: any): number {
        const numberOfCores = cores.length;
        const numberOfLandedCores = cores.filter((core)=> core.land_success).length;
        return Math.round((numberOfLandedCores / numberOfCores) * 100);
    }

    getLaunches(): void {
        if (this.launchSub) this.launchSub.unsubscribe();
        this.launchSub = this.launchService.getAll(this.filters)
            .subscribe(
                res => this.launches = res,
                err => { console.log(err); }
            );
    }

    private getLaunchPads(): void {
        if (this.launchpadSub) this.launchpadSub.unsubscribe();
        this.launchpadService.getAll()
            .subscribe(
                res => this.launchpads = res,
                err => { console.log(err); }
            );
    }

    private getRockets(): void {
        if (this.rocketSub) this.rocketSub.unsubscribe();
        this.rocketService.getAll()
            .subscribe(
                res => this.rockets = res,
                err => { console.log(err); }
            );
    }
}