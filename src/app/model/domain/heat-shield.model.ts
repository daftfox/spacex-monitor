import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class HeatShield {

  @JsonProperty('material', String)
  material: string = undefined;

  @JsonProperty('size_meters', Number)
  size: number = undefined;

  @JsonProperty('temp_degrees', Number)
  maxTemp: number = undefined;

  @JsonProperty('dev_partner', String)
  devPartner: string = undefined;
}
