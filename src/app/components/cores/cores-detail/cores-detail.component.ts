import { Component } from '@angular/core';
import { CoreService } from '../../../services/core.service';
import { ActivatedRoute } from '@angular/router';
import { Observer } from 'rxjs/Observer';

@Component({
    selector: 'cores-detail-component',
    templateUrl: './cores-detail.component.html',
    styleUrls: [
        './cores-detail.component.css'
    ]
})

export class CoresDetailComponent {
    id: string;
    core: any;
    
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
        if (this.coreSub) this.coreSub.unsubscribe();
        this.coreService.getById(this.id)
            .subscribe(
                res => {
                    this.core = res[0];
                },
                err => { console.log(err); }
            );
    }
}