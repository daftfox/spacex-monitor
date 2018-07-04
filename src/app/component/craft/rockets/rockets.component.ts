import { Component } from '@angular/core';
import { RocketService } from '../../../service/rocket.service';
import { Rocket } from '../../../model/domain/rocket.model';

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
        if (this.rocketSub) { this.rocketSub.unsubscribe(); }
        this.rocketService.get()
            .subscribe(
              ( rockets: Rocket[] ) => this.rockets = rockets,
                err => { console.log(err); }
            );
    }
}
