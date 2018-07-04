import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Telemetry {

  @JsonProperty('flight_club', String, true)
  flightClub: string = undefined;
}
