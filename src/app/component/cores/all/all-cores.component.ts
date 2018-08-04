import {Component, OnInit} from '@angular/core';
import { CoreService } from '../../../service/core.service';
import {CoreDetails} from '../../../model/domain/core-details.model';
import {Observable} from 'rxjs/internal/Observable';

@Component({
    selector: 'all-cores-component',
    templateUrl: './all-cores.component.html',
    styleUrls: [
        './all-cores.component.css'
    ]
})

export class AllCoresComponent implements OnInit {
    cores: Observable<CoreDetails[]>;

    constructor(private coreService: CoreService) {
        //this.cores = this.coreService.get();
    }

    ngOnInit() {
      setTimeout(() => {
        //this.coreService.refresh();
      });
    }
}
