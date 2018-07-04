import { JsonObject, JsonProperty } from 'json2typescript';
import { LaunchStage } from './launch-stage.model';

@JsonObject
export class LaunchedRocket {

  @JsonProperty('rocket_id', String, true)
  id: string = undefined;

  @JsonProperty('rocket_name', String, true)
  name: string = undefined;

  @JsonProperty('rocket_type', String, true)
  type: string = undefined;

  @JsonProperty('first_stage', LaunchStage)
  firstStage: LaunchStage = undefined;

  @JsonProperty('second_stage', LaunchStage)
  secondStage: LaunchStage = undefined;
}
