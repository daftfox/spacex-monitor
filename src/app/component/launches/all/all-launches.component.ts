import {Component, OnInit} from '@angular/core';
import { LaunchService } from '../../../service/launch.service';
import { LaunchpadService } from '../../../service/launchpad.service';
import { RocketService } from '../../../service/rocket.service';
import { Launch } from '../../../model/domain/launch.model';
import { Launchpad } from '../../../model/domain/launch-pad.model';
import { Rocket } from '../../../model/domain/rocket.model';
import { Observable } from 'rxjs';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'all-launches-component',
  templateUrl: './all-launches.component.html',
  styleUrls: [
    './all-launches.component.css'
  ],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            style({ transform: 'translateY(100px)' }),
            animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1}))
          ])
        ], { optional: true}),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            style({ transform: 'translateY(100px)' }),
            animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1}))
          ])
        ], { optional: true})
      ])
    ])
  ]
})

export class AllLaunchesComponent implements OnInit {
  launches: Observable<Launch[]>;
  launchpads: Observable<Launchpad[]>;
  rockets: Observable<Rocket[]>;
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

  }

  ngOnInit() {
    setTimeout(() => {
      this.launchService.refresh();
      this.rocketService.refresh();
      this.launchpadService.refresh();
    });
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
