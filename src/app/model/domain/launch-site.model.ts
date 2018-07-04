import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class LaunchSite {

  @JsonProperty('site_id', String)
  id: string = undefined;

  @JsonProperty('site_name', String)
  name: string = undefined;

  @JsonProperty('site_name_long', String, true)
  longName: string = undefined;
}
