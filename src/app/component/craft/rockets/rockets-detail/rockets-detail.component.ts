import {Component, OnInit} from '@angular/core';
import { RocketService } from '../../../../service/rocket.service';
import { ActivatedRoute } from '@angular/router';
import {Rocket} from '../../../../model/domain/rocket.model';
import {Observable} from 'rxjs/internal/Observable';

@Component({
    selector: 'rockets-detail-component',
    templateUrl: './rockets-detail.component.html',
    styleUrls: [
        './rockets-detail.component.css'
    ]
})

export class RocketsDetailComponent implements OnInit {
    id: string;
    rocket: Observable<Rocket>;

    routeSub: any;

    constructor(private rocketService: RocketService,
                private route: ActivatedRoute) {
        this.rocket = this.rocketService.getById();
        this.routeSub = this.route.params.subscribe(params => {
            this.id = params['id'];
        });
    }

    ngOnInit() {
      setTimeout(() => {
        this.rocketService.refreshById( this.id );
      });
    }
}
