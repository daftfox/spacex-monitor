import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Thrust {

  @JsonProperty('kN', Number)
  kN: number = undefined;

  @JsonProperty('lbf', Number)
  lbf: number = undefined;
}
