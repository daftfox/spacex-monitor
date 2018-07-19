import {Component, OnInit} from '@angular/core';
import { LaunchService } from '../../../service/launch.service';
import { LaunchpadService } from '../../../service/launchpad.service';
import { RocketService } from '../../../service/rocket.service';
import { Launch } from '../../../model/domain/launch.model';
import { Launchpad } from '../../../model/domain/launch-pad.model';
import { Rocket } from '../../../model/domain/rocket.model';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {listAnimation} from '../../../animation/list.animation';
import {fadeAnimation} from '../../../animation/fade.animation';

@Component({
  selector: 'all-launches-component',
  templateUrl: './all-launches.component.html',
  styleUrls: [
    './all-launches.component.css'
  ],
  animations: [
    listAnimation,
    fadeAnimation
  ]
})

export class AllLaunchesComponent implements OnInit {
  launches: Observable<Launch[]>;
  launchpads: Observable<Launchpad[]>;
  rockets: Observable<Rocket[]>;
  length = 0;

  filters = {
    site_id: null,
    launch_success: null,
    rocket_id: null
  };

  constructor(private launchService: LaunchService,
              private launchpadService: LaunchpadService,
              private rocketService: RocketService) {

    this.launches = this.launchService.get();
    this.rockets = this.rocketService.get();
    this.launchpads = this.launchpadService.get();
    this.launchService.get().pipe(
      map( ( launches: Launch[]) => launches.length )
    ).subscribe(
      length => this.length = length
    );
  }

  ngOnInit() {
    setTimeout(() => {
      this.launchService.refresh();
      this.rocketService.refresh();
      this.launchpadService.refresh();
    }, 10);
  }

  reusedCores( cores: any ): number {
    const numberOfCores = cores.length;
    const numberOfReusedCores = cores.filter((core) => core.reused).length;
    return Math.round((numberOfReusedCores / numberOfCores) * 100);
  }

  landedCores( cores: any ): number {
    const numberOfCores = cores.length;
    const numberOfLandedCores = cores.filter( ( core ) => core.land_success ).length;
    return Math.round((numberOfLandedCores / numberOfCores) * 100);
  }

  refreshLaunches() {

  }
}
