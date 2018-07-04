import { JsonObject, JsonProperty } from 'json2typescript';
import { Core } from './core.model';
import {PayloadLaunchDetails} from './payload-launch-details.model';

@JsonObject
export class LaunchStage {

  @JsonProperty('block', Number, true)
  block: number = undefined;

  @JsonProperty('payloads', [PayloadLaunchDetails], true)
  payloads: PayloadLaunchDetails[] = undefined;

  @JsonProperty('cores', [Core], true)
  cores: Core[] = undefined;
}
