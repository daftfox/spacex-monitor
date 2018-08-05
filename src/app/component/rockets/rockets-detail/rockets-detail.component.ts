import {Component, OnInit} from '@angular/core';
import { RocketService } from '../../../service/rocket.service';
import { ActivatedRoute } from '@angular/router';
import {Rocket} from '../../../model/domain/rocket.model';
import {Observable} from 'rxjs/internal/Observable';
import {fadeAnimation} from '../../../animation/fade.animation';
import {listAnimation} from '../../../animation/list.animation';
import {flatMap, map, share, switchMap} from 'rxjs/operators';

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
    images$: Observable<string[]>;

    constructor(private rocketService: RocketService,
                private route: ActivatedRoute) {
      this.rocket$ = this.route.params
        .pipe(
          switchMap(( params: { id: string } ) => this.rocketService.getById( params.id ) ),
          share()
        );

      this.images$ = this.rocket$
        .pipe(
          map( rocket => {
            let images: string[];
            const baseUrl = `/assets/images/${rocket.id}/`;
            switch ( rocket.id ) {
              case 'falcon1':
                images =  [
                  `${baseUrl}1.jpg`,
                  `${baseUrl}2.jpg`,
                  `${baseUrl}3.jpg`
                ];
                break;
              case 'falcon9':
                images =  [
                  `${baseUrl}1.jpg`,
                  `${baseUrl}2.jpg`,
                  `${baseUrl}3.jpg`,
                  `${baseUrl}4.jpg`,
                  `${baseUrl}5.jpg`
                ];
                break;
              case 'falconheavy':
                images =  [
                  `${baseUrl}1.jpg`,
                  `${baseUrl}2.jpg`,
                  `${baseUrl}3.jpg`,
                  `${baseUrl}4.jpg`
                ];
                break;
              case 'bfr':
                images =  [
                  `${baseUrl}1.jpg`
                ];
                break;
            }
            console.log(images);
            return images;
          })
        );
    }
}
