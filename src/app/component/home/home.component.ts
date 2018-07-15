import { Component } from '@angular/core';
import { InfoService } from '../../service/info.service';
import {SpacexInfo} from '../../model/domain/spacex-info.model';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.css'
    ]
})

export class HomeComponent {
    spacex: SpacexInfo;
    infoSub: any;

    constructor(private infoService: InfoService) {
        this.infoSub = this.infoService.get()
            .subscribe(
              ( spacexInfo: SpacexInfo[] ) => this.spacex = spacexInfo[0] ,
                err => { console.log(err); }
            );
    }
}
