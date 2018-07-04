import { JsonObject, JsonProperty } from 'json2typescript';
import { Thrust } from '../shared/thrust.model';

@JsonObject
export class EngineSet {

  @JsonProperty('number', Number)
  numberOfEngines: number = undefined;

  @JsonProperty('type', String)
  type: string = undefined;

  @JsonProperty('version', String)
  version: string = undefined;

  @JsonProperty('layout', String)
  layout: string = undefined;

  @JsonProperty('engine_loss_max', Number)
  maxEngineLoss: number = undefined;

  @JsonProperty('propellant_1', String)
  propellantOne: string = undefined;

  @JsonProperty('propellant_2', String)
  propellantTwo: string = undefined;

  @JsonProperty('thrust_sea_level', Thrust)
  thrustSeaLevel: Thrust = undefined;

  @JsonProperty('thrust_vacuum', Thrust)
  thrustVacuum: Thrust = undefined;

  @JsonProperty('thrust_to_weight', Number)
  thrustToWeight: number = undefined;
}
