import {Injectable, Type} from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import {catchError, debounceTime, map, retry, switchMap} from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Launch } from '../model/domain/launch.model';
import {Capsule} from '../model/domain/capsule.model';


/**
 * @name LaunchService
 * @description
 * This Service is used for retrieving data from an external API defined in TODO
 * @param Http injectable provided by angular for making http calls
 */
@Injectable()
export class LaunchService extends ApiService<Launch> {

  constructor( private httpClient: HttpClient ) {
    super(httpClient, Launch);
    this.API_BASE_URL = `${ this.API_BASE_URL }/launches`;
  }

  public getById(): Observable<Launch> {
    return this.getByIdSubject.pipe(
      debounceTime( 500 ),
      switchMap( id => this.http.get<Launch>( `${this.API_BASE_URL}`, this.getHttpOptions( { flight_number: id } ) ) ),
      map( response => this.jsonConvert.deserialize( response[0], Launch ) ),
      retry( 3 ),
      catchError( this.handleError )
    );
  }

}
