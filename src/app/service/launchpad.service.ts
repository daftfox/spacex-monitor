import {Injectable} from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Launchpad } from '../model/domain/launch-pad.model';
import {catchError, share} from 'rxjs/operators';
import {Observable} from 'rxjs/internal/Observable';


/**
 * @name LaunchPadService
 * @description
 * This Service is used for retrieving data from an external API defined in TODO
 * @param Http injectable provided by angular for making http calls
 */
@Injectable()
export class LaunchpadService extends ApiService<Launchpad> {
  constructor( private httpClient: HttpClient ) {
    super(httpClient, Launchpad);
    this.API_BASE_URL = `${ this.API_BASE_URL }/launchpads`;
    this.LOCALSTORAGE_KEY = 'launches-filter';
  }

  public getById( id: string ): Observable<Launchpad> {
    return this.getByIdRequest( id )
      .pipe(
        share(),
        catchError(this.handleError)
      );
  }
}
