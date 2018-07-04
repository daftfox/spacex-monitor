import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class LaunchLinks {

  @JsonProperty('mission_patch', String, true)
  missionPatch: string = undefined;

  @JsonProperty('mission_patch_small', String, true)
  missionPatchSmall: string = undefined;

  @JsonProperty('reddit_campaign', String, true)
  redditCampaign: string = undefined;

  @JsonProperty('reddit_launch', String, true)
  redditLaunch: string = undefined;

  @JsonProperty('reddit_recovery', String, true)
  redditRecovery: string = undefined;

  @JsonProperty('reddit_media', String, true)
  redditMedia: string = undefined;

  @JsonProperty('presskit', String, true)
  presskit: string = undefined;

  @JsonProperty('article_link', String, true)
  article: string = undefined;

  @JsonProperty('wikipedia', String, true)
  wikipedia: string = undefined;

  @JsonProperty('video_link', String, true)
  video: string = undefined;
}
