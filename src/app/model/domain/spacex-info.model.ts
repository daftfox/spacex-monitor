import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class SpacexInfo {

  @JsonProperty('ceo', String, true)
  ceo: string = undefined;

  @JsonProperty('coo', String, true)
  coo: string = undefined;

  @JsonProperty('cto', String, true)
  cto: string = undefined;

  @JsonProperty('cto_propulsion', String, true)
  ctoPropulsion: string = undefined;

  @JsonProperty('employees', Number, true)
  employees: number = undefined;

  @JsonProperty('founded', Number, true)
  founded: number = undefined;

  @JsonProperty('founder', String, true)
  founder: string = undefined;

  @JsonProperty('headquarters', Object, true)
  headquarters: Object = undefined;

  @JsonProperty('launch_sites', Number, true)
  numberOfLaunchSites: number = undefined;

  @JsonProperty('name', String, true)
  name: string = undefined;

  @JsonProperty('summary', String, true)
  summary: string = undefined;

  @JsonProperty('test_sites', Number, true)
  numberOfTestSites: number = undefined;

  @JsonProperty('valuation', Number, true)
  valuation: number = undefined;

  @JsonProperty('vehicles', Number, true)
  numberOfVehicles: number = undefined;
}
