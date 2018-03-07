import { Component } from '@angular/core';
import { LaunchService } from '../../services/launch.service';

@Component({
    selector: 'launches-component',
    templateUrl: './launches.component.html',
    styleUrls: [
        './launches.component.css'
    ]
})

export class LaunchesComponent {
    launches: Array<any>;

    constructor(private launchService: LaunchService) {
        this.launchService.getAllLaunches()
            .subscribe((response) => {
                console.log(response);
            });
    }
}