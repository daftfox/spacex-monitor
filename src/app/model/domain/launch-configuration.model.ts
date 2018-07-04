import { JsonObject, JsonProperty } from 'json2typescript';
import { Rocket } from './rocket.model';
import { LaunchStage } from './launch-stage.model';

@JsonObject
export class LaunchConfiguration extends Rocket {

  @JsonProperty('first_stage', LaunchStage)
  firstStage: LaunchStage = undefined;

  @JsonProperty('second_stage', LaunchStage)
  secondStage: LaunchStage = undefined;

}
