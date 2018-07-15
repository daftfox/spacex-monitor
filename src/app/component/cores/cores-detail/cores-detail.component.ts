import { Component } from '@angular/core';
import { CoreService } from '../../../service/core.service';
import { ActivatedRoute } from '@angular/router';
import {CoreDetails} from '../../../model/domain/core-details.model';

@Component({
    selector: 'cores-detail-component',
    templateUrl: './cores-detail.component.html',
    styleUrls: [
        './cores-detail.component.css'
    ]
})

export class CoresDetailComponent {
    id: string;
    core: CoreDetails;

    coreSub: any;
    routeSub: any;

    constructor(private coreService: CoreService,
                private route: ActivatedRoute) {

        this.routeSub = this.route.params.subscribe(params => {
            this.id = params['id'];
            this.getCore();
        });
    }

    private getCore(): void {
        if (this.coreSub) { this.coreSub.unsubscribe(); };
        this.coreService.getById(this.id)
            .subscribe(
              (core: CoreDetails) => {
                    this.core = core;
                },
                err => { console.log(err); }
            );
    }
}
