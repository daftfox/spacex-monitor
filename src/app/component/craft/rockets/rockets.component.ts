import {Component, OnInit} from '@angular/core';
import { RocketService } from '../../../service/rocket.service';
import { Rocket } from '../../../model/domain/rocket.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'rockets-component',
    templateUrl: './rockets.component.html',
    styleUrls: [
        './rockets.component.css'
    ]
})

export class RocketsComponent implements OnInit {
    rockets: Observable<Rocket[]>;

    constructor(private rocketService: RocketService) {
      this.rockets = this.rocketService.get();
    }

    ngOnInit() {
      setTimeout(() => {
        this.rocketService.refresh();
      });
    }
}
