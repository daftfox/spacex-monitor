import {Component, Input} from '@angular/core';
import {PayloadWeight} from '../../model/domain/payload-weight.model';

@Component({
  selector: 'payload-weights',
  templateUrl: './payload-weights.component.html',
  styleUrls: [
    './payload-weights.component.scss'
  ]
})

export class PayloadWeightsComponent {
  @Input() payloadWeights: PayloadWeight[];

  constructor() {}
}
