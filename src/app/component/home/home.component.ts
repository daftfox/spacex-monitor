import { Component } from '@angular/core';
import { InfoService } from '../../service/info.service';
import { SpacexInfo } from '../../model/domain/spacex-info.model';
import { Observable } from 'rxjs/internal/Observable';
import {map, tap} from 'rxjs/operators';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.scss'
    ]
})

export class HomeComponent {
    spacex$: Observable<SpacexInfo>;

    constructor( private infoService: InfoService ) {
        this.spacex$ = this.infoService.get()
          .pipe(
            map( ( info: SpacexInfo ) => info )
          );
    }
}
