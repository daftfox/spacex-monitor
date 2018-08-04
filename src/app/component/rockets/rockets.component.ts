import { Component } from '@angular/core';
import { RocketService } from '../../service/rocket.service';
import { Rocket } from '../../model/domain/rocket.model';
import { Observable } from 'rxjs';
import {fadeAnimation} from '../../animation/fade.animation';
import {listAnimation} from '../../animation/list.animation';
import {map} from 'rxjs/operators';

@Component({
  selector: 'rockets-component',
  templateUrl: './rockets.component.html',
  styleUrls: [
      './rockets.component.css'
  ],
  animations: [
    listAnimation,
    fadeAnimation
  ]
})

export class RocketsComponent {
    rockets$: Observable<Rocket[]>;
    length$: Observable<number>;

    constructor(private rocketService: RocketService) {
      this.rockets$ = this.rocketService.get();

      this.length$ = this.rockets$.pipe(
        map( rockets => rockets.length )
      );
    }
}
