import { JsonObject, JsonProperty } from 'json2typescript';
import { CompositeFairing } from './composite-fairing.model';

@JsonObject
export class PayloadOptions {

  @JsonProperty('option_1', String)
  optionOne: string = undefined;

  @JsonProperty('option_2', String, true)
  optionTwo: string = undefined;

  @JsonProperty('composite_fairing', CompositeFairing, true)
  compositeFairing: CompositeFairing = undefined;

}
