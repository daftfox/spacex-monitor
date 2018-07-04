import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Rocket } from '../model/domain/rocket.model';


/**
 * @name RocketService
 * @description
 * This Service is used for retrieving data from an external API defined in TODO
 * @param Http injectable provided by angular for making http calls
 */
@Injectable()
export class RocketService extends ApiService<Rocket> {

  constructor( private httpClient: HttpClient ) {
    super(httpClient, Rocket);
    this.API_BASE_URL = `${ this.API_BASE_URL }/rockets`;
  }
}
