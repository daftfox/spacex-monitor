import { Component } from '@angular/core';
import { CoreService } from '../../../service/core.service';
import { Core } from '../../../model/domain/core.model';

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
        if (this.coreSub) { this.coreSub.unsubscribe(); }
        this.coreService.get()
            .subscribe(
              ( cores: Core[] ) => this.cores = cores,
                err => { console.log(err); }
            );
    }
}
