import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import {catchError, debounceTime, map, share, shareReplay, tap} from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Launch } from '../model/domain/launch.model';


/**
 * @name LaunchService
 * @description
 * This Service is used for retrieving data from an external API defined in TODO
 * @param Http injectable provided by angular for making http calls
 */

@Injectable()
export class LaunchService extends ApiService<Launch> {
  constructor( private httpClient: HttpClient ) {
    super( httpClient, Launch );
    this.API_BASE_URL = `${ this.API_BASE_URL }/launches`;
    this.LOCALSTORAGE_KEY = 'launches-filters';
  }

  public getById( id: string ): Observable<Launch> {
    return this.http.get<Launch>(`${this.API_BASE_URL}`, this.getHttpOptions({ flight_number: id }))
      .pipe(
        map( response => this.jsonConvert.deserialize( response,  Launch )[ 0 ]),
        share(),
        catchError( this.handleError )
      );
  }
}
