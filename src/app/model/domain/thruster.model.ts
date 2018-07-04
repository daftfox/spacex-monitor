import { JsonObject, JsonProperty } from 'json2typescript';
import { Thrust } from '../shared/thrust.model';

@JsonObject
export class Thruster {

  @JsonProperty('type', String)
  type: string = undefined;

  @JsonProperty('amount', Number)
  amount: number = undefined;

  @JsonProperty('pods', Number)
  pods: number = undefined;

  @JsonProperty('fuel_1', String)
  fuelOne: string = undefined;

  @JsonProperty('fuel_2', String)
  fuelTwo: string = undefined;

  @JsonProperty('thrust', Thrust)
  thrust: Thrust = undefined;
}
