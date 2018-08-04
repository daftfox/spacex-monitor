import {Component, OnInit} from '@angular/core';
import { RocketService } from '../../../service/rocket.service';
import { ActivatedRoute } from '@angular/router';
import {Rocket} from '../../../model/domain/rocket.model';
import {Observable} from 'rxjs/internal/Observable';
import {fadeAnimation} from '../../../animation/fade.animation';
import {listAnimation} from '../../../animation/list.animation';
import {flatMap, share, switchMap} from 'rxjs/operators';

@Component({
  selector: 'rockets-detail-component',
  templateUrl: './rockets-detail.component.html',
  styleUrls: [
      './rockets-detail.component.scss'
  ],
  animations: [
    listAnimation,
    fadeAnimation
  ]
})

export class RocketsDetailComponent {
    rocket$: Observable<Rocket>;

    constructor(private rocketService: RocketService,
                private route: ActivatedRoute) {
      this.rocket$ = this.route.params
        .pipe(
          switchMap(( params: { id: string } ) => this.rocketService.getById( params.id ) ),
          share()
        );
    }
}
