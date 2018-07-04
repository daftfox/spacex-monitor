import { Any, JsonObject, JsonProperty } from 'json2typescript';
import { Volume } from '../shared/volume.model';

@JsonObject
export class Trunk {

  @JsonProperty('trunk_volume', Volume)
  volume: Volume = undefined;

  @JsonProperty('cargo', Any)
  cargo: any = undefined;
}
