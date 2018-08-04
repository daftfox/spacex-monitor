import {Component, Input} from '@angular/core';
import {Rocket} from '../../model/domain/rocket.model';

@Component({
  selector: 'blueprint',
  templateUrl: './blueprint.component.html',
  styleUrls: [
    './blueprint.component.scss'
  ]
})

export class BlueprintComponent {
  @Input() rocket: Rocket;

  constructor() {}
}
