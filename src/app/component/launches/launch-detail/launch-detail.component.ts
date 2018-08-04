import {Component} from '@angular/core';
import {LaunchService} from '../../../service/launch.service';
import {LaunchpadService} from '../../../service/launchpad.service';
import {ActivatedRoute} from '@angular/router';
import {Launch} from '../../../model/domain/launch.model';
import {Launchpad} from '../../../model/domain/launch-pad.model';
import {Observable} from 'rxjs/internal/Observable';
import {flatMap, map, share, switchMap, tap} from 'rxjs/operators';
import {combineLatest} from 'rxjs/internal/observable/combineLatest';
import {fadeAnimation} from '../../../animation/fade.animation';
import {listAnimation} from '../../../animation/list.animation';

@Component({
  selector: 'launch-detail-component',
  templateUrl: './launch-detail.component.html',
  styleUrls: [
    './launch-detail.component.scss'
  ],
  animations: [
    fadeAnimation,
    listAnimation
  ]
})

export class LaunchDetailComponent {
  launchData$: Observable<{ launch: Launch, launchpad: Launchpad }>;
  launch$: Observable<Launch>;
  launchpad$: Observable<Launchpad>;
  videoId$: Observable<string>;

  loading = false;


  constructor(private launchService: LaunchService,
              private launchpadService: LaunchpadService,
              private route: ActivatedRoute) {
    this.launch$ = this.route.params
      .pipe(
        tap( _ => this.loading = true ),
        switchMap(( params: { id: string } ) => this.launchService.getById( params.id ) ),
        share()
      );

    this.launchpad$ = this.launch$
      .pipe(
        switchMap(( launch: Launch ) => this.launchpadService.getById( launch.launchSite.id ) ),
        share()
      );

    this.launchData$ = combineLatest(this.launch$, this.launchpad$)
      .pipe(
        map(( [ launch, launchpad ] ) => ( { launch, launchpad } ) ),
        tap( _ => this.loading = false ),
        share()
      );

    this.videoId$ = this.launch$
      .pipe(
        tap( launch => console.log(launch.links.video.split('=')[1]) ),
        map( launch => launch.links.video.split('=')[1])
      );
  }
}
