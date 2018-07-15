import { Component } from '@angular/core';
import { CoreService } from '../../../service/core.service';
import {CoreDetails} from '../../../model/domain/core-details.model';

@Component({
    selector: 'all-cores-component',
    templateUrl: './all-cores.component.html',
    styleUrls: [
        './all-cores.component.css'
    ]
})

export class AllCoresComponent {
    cores: Array<CoreDetails>;

    coreSub: any;

    constructor(private coreService: CoreService) {
        this.getCores();
    }

    private getCores(): void {
        if (this.coreSub) { this.coreSub.unsubscribe(); }
        this.coreService.get()
            .subscribe(
              ( cores: CoreDetails[] ) => this.cores = cores,
                err => { console.log(err); }
            );
    }
}
