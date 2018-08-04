import { JsonObject, JsonProperty } from 'json2typescript';
import { Thrust } from '../shared/thrust.model';
import { PayloadOptions } from './payload-options.model';

@JsonObject
export class Stage {

  @JsonProperty('reusable', Boolean, true)
  reusable: boolean = undefined;

  @JsonProperty('engines', Number, true)
  numberOfEngines: number = undefined;

  @JsonProperty('fuel_amount_tons', Number, true)
  fuelAmount: number = undefined;

  @JsonProperty('burn_time_sec', Number, true)
  burnTime: number = undefined;

  @JsonProperty('thrust', Thrust, true)
  thrust: Thrust = undefined;

  @JsonProperty('thrust_sea_level', Thrust, true)
  thrustSeaLevel: Thrust = undefined;

  @JsonProperty('thrust_vacuum', Thrust, true)
  thrustVacuum: Thrust = undefined;

  @JsonProperty('payloads', PayloadOptions, true)
  payloads: PayloadOptions = undefined;
}
