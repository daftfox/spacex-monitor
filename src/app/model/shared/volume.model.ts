import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Volume {

  @JsonProperty('cubic_meters', Number)
  cubicMeters: number = undefined;

  @JsonProperty('cubic_feet', Number)
  cubicFeet: number = undefined;
}
