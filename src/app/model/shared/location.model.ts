import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Location {

  @JsonProperty('name', String)
  name: string = undefined;

  @JsonProperty('region', String)
  region: string = undefined;

  @JsonProperty('latitude', Number)
  latitude: number = undefined;

  @JsonProperty('longitude', Number)
  longitude: number = undefined;
}
