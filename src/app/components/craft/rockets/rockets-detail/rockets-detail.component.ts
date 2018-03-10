import { Component } from '@angular/core';
import { RocketService } from '../../../../services/rocket.service';
import { ActivatedRoute } from '@angular/router';
import { Observer } from 'rxjs/Observer';
import { URLSearchParams } from '@angular/http';

@Component({
    selector: 'rockets-detail-component',
    templateUrl: './rockets-detail.component.html',
    styleUrls: [
        './rockets-detail.component.css'
    ]
})

export class RocketsDetailComponent {
    id: string;
    rocket: any;
    
    rocketSub: any;
    routeSub: any;

    constructor(private rocketService: RocketService,
                private route: ActivatedRoute) {
        
        this.routeSub = this.route.params.subscribe(params => {
            this.id = params['id'];
            this.getRocket();
        });
    }

    private getRocket(): void {
        if (this.rocketSub) this.rocketSub.unsubscribe();
        this.rocketService.getById(this.id)
            .subscribe(
                res => this.rocket = res,
                err => { console.log(err); }
            );
    }
}