import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class Reuse {

  @JsonProperty('core', Boolean, true)
  core: boolean = undefined;

  @JsonProperty('side_core1', Boolean, true)
  sideCoreOne: boolean = undefined;

  @JsonProperty('side_core2', Boolean, true)
  sideCoreTwo: boolean = undefined;

  @JsonProperty('fairings', Boolean, true)
  fairings: boolean = undefined;

  @JsonProperty('capsule', Boolean, true)
  capsule: boolean = undefined;
}
