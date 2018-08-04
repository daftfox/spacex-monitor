import {Component, OnInit} from '@angular/core';
import { LaunchService } from '../../../service/launch.service';
import { Launch } from '../../../model/domain/launch.model';
import { Launchpad } from '../../../model/domain/launch-pad.model';
import { Rocket } from '../../../model/domain/rocket.model';
import { Observable } from 'rxjs';
import {distinctUntilChanged, share, startWith, switchMap, tap} from 'rxjs/operators';
import {listAnimation} from '../../../animation/list.animation';
import {fadeAnimation} from '../../../animation/fade.animation';
import {RocketService} from '../../../service/rocket.service';
import {FormControl, FormGroup} from '@angular/forms';
import {combineLatest} from 'rxjs/internal/observable/combineLatest';

@Component({
  selector: 'all-launches-component',
  templateUrl: './all-launches.component.html',
  styleUrls: [
    './all-launches.component.scss'
  ],
  animations: [
    listAnimation,
    fadeAnimation
  ]
})

export class AllLaunchesComponent implements OnInit {

  // Data observables
  public launches$:                      Observable<Launch[]>;
  public launchpads$:                    Observable<Launchpad[]>;
  public rockets$:                       Observable<Rocket[]>;

  // filter observables
  public selectedRocketFilter$:          Observable<string>;
  public selectedMissionSuccessFilter$:  Observable<string>;

  public filters:                        Object;
  public filtersForm:                    FormGroup;
  public loading                         = false;

  constructor(private launchService: LaunchService,
              // private launchpadService: LaunchpadService,
              private rocketService: RocketService) {
    this.filters = this.launchService.collectParams();
  }

  ngOnInit() {
    this.filtersForm =  new FormGroup({
      rocket:           new FormControl(this.filters['rocket_id'] || ''),
      missionSuccess:   new FormControl(this.filters['launch_success'] || ''),
    });

    this.selectedRocketFilter$ = this.filtersForm.get('rocket').valueChanges
      .pipe(
        startWith( this.filters['rocket_id'] || '' ),
        distinctUntilChanged()
      );

    this.selectedMissionSuccessFilter$ = this.filtersForm.get('missionSuccess').valueChanges
      .pipe(
        startWith( this.filters['launch_success'] || '' ),
        distinctUntilChanged()
      );

    this.launches$ = combineLatest( this.selectedMissionSuccessFilter$, this.selectedRocketFilter$)
      .pipe(
        tap( _ => this.loading = true ),
        switchMap( params => this.launchService.get( { launch_success: params[0], rocket_id: params[1] } ) ),
        tap( _ => this.loading = false ),
        share()
      );

    this.rockets$ = this.rocketService.get();
  }

  public resetFilters(): void {
    this.filtersForm.setValue( { rocket: '', missionSuccess: '' } );
  }
}
