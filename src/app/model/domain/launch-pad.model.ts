import { JsonObject, JsonProperty } from 'json2typescript';
import { Location } from '../shared/location.model';

@JsonObject
export class Launchpad {

  @JsonProperty('id', String)
  id: string = undefined;

  @JsonProperty('full_name', String)
  fullName: string = undefined;

  @JsonProperty('status', String)
  status: string = undefined;

  @JsonProperty('location', Location)
  location: Location = undefined;

  @JsonProperty('vehicles_launched', [String])
  vehiclesLaunched: string[] = undefined;

  @JsonProperty('details', String)
  details: string = undefined;
}
