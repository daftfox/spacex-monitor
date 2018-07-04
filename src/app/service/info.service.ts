import {Injectable} from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import {Any} from 'json2typescript';


/**
 * @name InfoService
 * @description
 * This Service is used for retrieving data from an external API defined in TODO
 * @param Http injectable provided by angular for making http calls
 */
@Injectable()
export class InfoService extends ApiService<any> {

  constructor( private httpClient: HttpClient ) {
    super(httpClient, Any);
    this.API_BASE_URL = `${ this.API_BASE_URL }/info`;
  }
}
