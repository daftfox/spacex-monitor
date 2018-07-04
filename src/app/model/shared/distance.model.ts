import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Distance {

  @JsonProperty('meters', Number)
  meters: number = undefined;

  @JsonProperty('feet', Number)
  feet: number = undefined;
}
