import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Mass {

  @JsonProperty('kg', Number)
  kg: number = undefined;

  @JsonProperty('lb', Number)
  lb: number = undefined;
}
