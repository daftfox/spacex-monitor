import { Any, JsonObject, JsonProperty } from 'json2typescript';
import { Thruster } from './thruster.model';
import { HeatShield } from './heat-shield.model';
import { Mass } from '../shared/mass.model';
import { Volume } from '../shared/volume.model';
import { Trunk } from './trunk.model';
import { Distance } from '../shared/distance.model';

@JsonObject
export class Capsule {

  @JsonProperty('id', String)
  id: string = undefined;

  @JsonProperty('name', String)
  name: string = undefined;

  @JsonProperty('type', String)
  type: string = undefined;

  @JsonProperty('active', Boolean)
  active: boolean = undefined;

  @JsonProperty('crew_capacity', Number)
  crewCapacity: number = undefined;

  @JsonProperty('sidewall_angle_deg', Number)
  sidewallAngle: number = undefined;

  @JsonProperty('orbit_duration_yr', Number)
  orbitDuration: number = undefined;

  @JsonProperty('heat_shield', HeatShield)
  heatShield: HeatShield = undefined;

  @JsonProperty('thrusters', [Thruster])
  thrusters: Thruster[] = undefined;

  @JsonProperty('launch_payload_mass', Mass)
  launchPayloadMass: Mass = undefined;

  @JsonProperty('return_payload_mass', Mass)
  returnPayloadMass: Mass = undefined;

  @JsonProperty('launch_payload_vol', Volume)
  launchPayloadVolume: Volume = undefined;

  @JsonProperty('return_payload_vol', Volume)
  returnPayloadVolume: Volume = undefined;

  @JsonProperty('pressurized_capsule', Any)
  pressurizedCapsule: any = undefined;

  @JsonProperty('trunk', Trunk)
  trunk: Trunk = undefined;

  @JsonProperty('height_w_trunk', Distance)
  heightWithTrunk: Distance = undefined;

  @JsonProperty('diameter', Distance)
  diameter: Distance = undefined;
}
