import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class CoreDetails {
  @JsonProperty('block', Number, true)
  block: number = undefined;

  @JsonProperty('core_serial', String)
  serial: string = undefined;

  @JsonProperty('status', String)
  status: string = undefined;

  @JsonProperty('details', String)
  details: string = undefined;

  @JsonProperty('missions', [String], true)
  missions: string[] = undefined;

  @JsonProperty('original_launch', String)
  originalLaunchUTC: string = undefined;

  @JsonProperty('original_launch_unix', Number)
  originalLaunchUnix: number = undefined;

  @JsonProperty('water_landing', Boolean)
  waterLanding: boolean = undefined;

  @JsonProperty('asds_attempt', Boolean)
  attemptedASDS: boolean = undefined;

  @JsonProperty('asds_landings', Number)
  numberOfASDSLandings: number = undefined;

  @JsonProperty('rtls_attempt', Boolean)
  attemptedRTLS: boolean = undefined;

  @JsonProperty('rtls_landings', Number)
  numberOfRTLSLandings: number = undefined;

}

