import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class OrbitParams {

  @JsonProperty('reference_system', String)
  referenceSystem: string = undefined;

  @JsonProperty('regime', String)
  regime: string = undefined;

  @JsonProperty('longitude', Number, true)
  longitude: number = undefined;

  @JsonProperty('semi_major_axis_km', Number, true)
  semiMajorAxisKm: number = undefined;

  @JsonProperty('eccentricity', Number, true)
  eccentricity: number = undefined;

  @JsonProperty('periapsis_km', Number, true)
  periapsis: number = undefined;

  @JsonProperty('apoapsis_km', Number, true)
  apoapsis: number = undefined;

  @JsonProperty('inclination_deg', Number, true)
  inclination: number = undefined;

  @JsonProperty('period_min', Number, true)
  periodMin: number = undefined;

  @JsonProperty('lifespan_years', Number, true)
  lifespanYears: number = undefined;
}
