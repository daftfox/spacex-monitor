import { Component } from '@angular/core';
import { CoreService } from '../../../services/core.service';
import { Observer } from 'rxjs/Observer';

@Component({
    selector: 'all-cores-component',
    templateUrl: './all-cores.component.html',
    styleUrls: [
        './all-cores.component.css'
    ]
})

export class AllCoresComponent {
    cores: Array<any>;

    coreSub: any;

    constructor(private coreService: CoreService) {
        this.getCores();
    }

    private getCores(): void {
        if (this.coreSub) this.coreSub.unsubscribe();
        this.coreService.getAll()
            .subscribe(
                res => this.cores = res,
                err => { console.log(err); }
            );
    }
}