import { Component } from '@angular/core';
import { RocketService } from '../../../services/rocket.service';
import { Observer } from 'rxjs/Observer';

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