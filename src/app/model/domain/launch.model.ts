import { JsonObject, JsonProperty } from 'json2typescript';
import { Telemetry } from './telemetry.model';
import { Reuse } from './reuse.model';
import { LaunchSite } from './launch-site.model';
import { LaunchLinks } from './launch-links.model';
import { LaunchedRocket } from './launched-rocket.model';

@JsonObject
export class Launch {

  @JsonProperty('flight_number', Number)
  flightNumber: number = undefined;

  @JsonProperty('mission_name', String)
  missionName: string = undefined;

  @JsonProperty('launch_year', String)
  launchYear: string = undefined;

  @JsonProperty('launch_date_unix', Number)
  launchDateUnix: number = undefined;

  @JsonProperty('launch_date_utc', String)
  launchDateUTC: string = undefined;

  @JsonProperty('launch_date_local', String)
  launchDateLocal: string = undefined;

  @JsonProperty('rocket', LaunchedRocket)
  rocket: LaunchedRocket = undefined;

  @JsonProperty('telemetry', Telemetry)
  telemetry: Telemetry = undefined;

  @JsonProperty('reuse', Reuse)
  reuse: Reuse = undefined;

  @JsonProperty('launch_site', LaunchSite)
  launchSite: LaunchSite = undefined;

  @JsonProperty('launch_success', Boolean)
  success: boolean = undefined;

  @JsonProperty('links', LaunchLinks)
  links: LaunchLinks = undefined;

  @JsonProperty('details', String)
  details: string = undefined;
}
