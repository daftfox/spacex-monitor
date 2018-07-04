import { JsonObject, JsonProperty } from 'json2typescript';
import { Distance } from '../shared/distance.model';
import { Mass } from '../shared/mass.model';
import { PayloadWeight } from './payload-weight.model';
import { Stage } from './stage.model';
import { EngineSet } from './engine-set.model';
import { LandingLegSet } from './landing-leg-set.model';
import {LaunchStage} from './launch-stage.model';

@JsonObject
export class Rocket {

  @JsonProperty('id', String, true)
  id: string = undefined;

  @JsonProperty('name', String, true)
  name: string = undefined;

  @JsonProperty('type', String, true)
  type: string = undefined;

  @JsonProperty('active', Boolean, true)
  active: boolean = undefined;

  @JsonProperty('stages', Number, true)
  numberOfStages: number = undefined;

  @JsonProperty('boosters', Number, true)
  numberOfBboosters: number = undefined;

  @JsonProperty('cost_per_launch', Number, true)
  costPerLaunch: number = undefined;

  @JsonProperty('success_rate_pct', Number, true)
  successRate: number = undefined;

  @JsonProperty('first_flight', String, true)
  firstFlight: string = undefined;

  @JsonProperty('country', String, true)
  country: string = undefined;

  @JsonProperty('company', String, true)
  company: string = undefined;

  @JsonProperty('height', Distance, true)
  height: Distance = undefined;

  @JsonProperty('diameter', Distance, true)
  diameter: Distance = undefined;

  @JsonProperty('mass', Mass, true)
  mass: Mass = undefined;

  @JsonProperty('payload_weights', [PayloadWeight], true)
  payloadWeights: PayloadWeight = undefined;

  @JsonProperty('first_stage', Stage)
  firstStage: Stage | LaunchStage = undefined;

  @JsonProperty('second_stage', Stage)
  secondStage: Stage | LaunchStage = undefined;

  @JsonProperty('engines', EngineSet, true)
  engines: EngineSet = undefined;

  @JsonProperty('landing_legs', LandingLegSet, true)
  landingLegs: LandingLegSet = undefined;

  @JsonProperty('description', String, true)
  description: string = undefined;
}
