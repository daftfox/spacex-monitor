import { Component } from '@angular/core';
import { LaunchService } from '../../../services/launch.service';
import { LaunchpadService } from '../../../services/launchpad.service';
import { RocketService } from '../../../services/rocket.service';
import { Observer } from 'rxjs/Observer';
import { URLSearchParams } from '@angular/http';

@Component({
    selector: 'rockets-component',
    templateUrl: './rockets.component.html',
    styleUrls: [
        './rockets.component.css'
    ]
})

export class RocketsComponent {
    rockets: Array<any>;
    
    rocketSub: any;

    constructor(private rocketService: RocketService) {
        this.getRockets();
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