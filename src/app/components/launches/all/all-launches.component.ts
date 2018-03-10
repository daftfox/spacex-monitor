import { Component } from '@angular/core';
import { LaunchService } from '../../../services/launch.service';
import { LaunchpadService } from '../../../services/launchpad.service';
import { RocketService } from '../../../services/rocket.service';
import { Observer } from 'rxjs/Observer';
import { URLSearchParams } from '@angular/http';

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
        selectedLaunchpad: null,
        successful: null,
        selectedRocket: null
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
        this.launchSub = this.launchService.getAll(this.getQueryParams())
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

    private getQueryParams(): URLSearchParams {
        let params = new URLSearchParams();
        params.append('site_id', this.filters.selectedLaunchpad);
        params.append('launch_success', this.filters.successful);
        params.append('rocket_id', this.filters.selectedRocket);
        return params;
    }
}