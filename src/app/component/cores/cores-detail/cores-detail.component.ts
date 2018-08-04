import {Component, OnInit} from '@angular/core';
import { CoreService } from '../../../service/core.service';
import { ActivatedRoute } from '@angular/router';
import {CoreDetails} from '../../../model/domain/core-details.model';
import {Observable} from 'rxjs/internal/Observable';

@Component({
    selector: 'cores-detail-component',
    templateUrl: './cores-detail.component.html',
    styleUrls: [
        './cores-detail.component.css'
    ]
})

export class CoresDetailComponent implements OnInit {
    id: string;
    core: Observable<CoreDetails>;

    routeSub: any;

    constructor(private coreService: CoreService,
                private route: ActivatedRoute) {
        //this.core = this.coreService.getById();
        this.routeSub = this.route.params.subscribe(params => {
            this.id = params['id'];
        });
    }

    ngOnInit() {
      setTimeout(() => {
        //this.coreService.refreshById( this.id );
      });
    }
}
