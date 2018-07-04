import { JsonObject, JsonProperty } from 'json2typescript';
import { Distance } from '../shared/distance.model';

@JsonObject
export class CompositeFairing {

  @JsonProperty('height', Distance)
  height: string = undefined;

  @JsonProperty('diameter', Distance)
  diameter: string = undefined;
}
