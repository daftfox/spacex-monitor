import {Injectable, Type} from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Capsule } from '../model/domain/capsule.model';

/**
 * @name CapsuleService
 * @description
 * This Service is used for retrieving data from an external API defined in TODO
 * @param Http injectable provided by angular for making http calls
 */
@Injectable()
export class CapsuleService extends ApiService<Capsule> {

  constructor( private httpClient: HttpClient ) {
    super(httpClient, Capsule);
    this.API_BASE_URL = `${ this.API_BASE_URL }/capsules`;
  }
}
