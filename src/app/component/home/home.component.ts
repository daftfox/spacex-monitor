import { Component } from '@angular/core';
import { InfoService } from '../../service/info.service';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.css'
    ]
})

export class HomeComponent {
    spacex: any;
    infoSub: any;

    constructor(private infoService: InfoService) {
        this.infoSub = this.infoService.get()
            .subscribe(
                res => this.spacex = res,
                err => { console.log(err); }
            );
    }
}
