import { JsonObject, JsonProperty } from 'json2typescript';
import { Mass } from '../shared/mass.model';

@JsonObject
export class PayloadWeight extends Mass {

  @JsonProperty('id', String)
  id: string = undefined;

  @JsonProperty('name', String)
  name: string = undefined;
}
