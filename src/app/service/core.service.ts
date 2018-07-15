import {Injectable, Type} from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Core } from '../model/domain/core.model';
import {CoreDetails} from '../model/domain/core-details.model';

/**
 * @name CoreService
 * @description
 * This Service is used for retrieving data from an external API defined in TODO
 * @param Http injectable provided by angular for making http calls
 */
@Injectable()
export class CoreService extends ApiService<CoreDetails> {

  constructor( private httpClient: HttpClient ) {
    super(httpClient, CoreDetails);
    this.API_BASE_URL = `${ this.API_BASE_URL }/parts/cores`;
  }
}
