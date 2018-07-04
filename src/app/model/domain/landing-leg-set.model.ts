import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class LandingLegSet {

  @JsonProperty('number', Number)
  numberOfLandingLegs: number = undefined;

  @JsonProperty('material', String)
  material: string = undefined;
}
