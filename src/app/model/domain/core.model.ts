import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Core {

  @JsonProperty('core_serial', String)
  serial: string = undefined;

  @JsonProperty('flight', Number)
  flight: number = undefined;

  @JsonProperty('block', Number)
  block: number = undefined;

  @JsonProperty('reused', Boolean)
  reused: boolean = undefined;

  @JsonProperty('land_success', Boolean, true)
  landSuccess: boolean = undefined;

  @JsonProperty('landing_type', String)
  landingType: string = undefined;

  @JsonProperty('landing_vehicle', String)
  landingVehicle: string = undefined;
}
