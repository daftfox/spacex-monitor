import { JsonObject, JsonProperty } from 'json2typescript';
import { OrbitParams } from './orbit-params.model';

@JsonObject
export class PayloadLaunchDetails {

  @JsonProperty('payload_id', String)
  id: string = undefined;

  @JsonProperty('cap_serial', String, true)
  capSerial: string = undefined;

  @JsonProperty('reused', Boolean)
  reused: boolean = undefined;

  @JsonProperty('customers', [String])
  customers: string[] = undefined;

  @JsonProperty('payload_type', String)
  type: string = undefined;

  @JsonProperty('payload_mass_kg', Number)
  massKg: number = undefined;

  @JsonProperty('payload_mass_lbs', Number)
  massLbs: number = undefined;

  @JsonProperty('orbit', String)
  orbit: string = undefined;

  @JsonProperty('orbit_params', OrbitParams)
  orbitParams: OrbitParams = undefined;

  @JsonProperty('mass_returned_kg', Number, true)
  massReturnedKg: number = undefined;

  @JsonProperty('mass_returnedlbs', Number, true)
  massReturnedLbs: number = undefined;

  @JsonProperty('flight_time_sec', Number, true)
  flightTime: number = undefined;

  @JsonProperty('cargo_manifest', String, true)
  cargoManifest: string = undefined;

}
