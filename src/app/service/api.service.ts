import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, filter, map, share, shareReplay} from 'rxjs/operators';
import { JsonConvert, ValueCheckingMode } from 'json2typescript';
import { environment } from '../../environments/environment';
import {Type} from '@angular/core';

/**
 * @name ApiService
 * @description
 * This Service is used for retrieving data from an external API defined in /src/app/environments/environment
 * @param HttpClient injectable provided by angular for making http calls
 * @param Type<T> Class reference used for deserialization of response objects.
 */
export class ApiService<T> {
  protected LOCALSTORAGE_KEY = 'spacex-monitor';
  protected API_BASE_URL = environment.API_URL;
  protected params: Object;

  protected cache$: Observable<T[]>;


  protected jsonConvert: JsonConvert;

  constructor(protected http: HttpClient,
              private type: Type<T>) {
    this.jsonConvert = new JsonConvert();
    this.jsonConvert.ignorePrimitiveChecks = false;
    this.jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
  }

  /**
   * Return an Observable containing the result of an HTTP GET request.
   *
   * @param params: Object. An object containing parameters to be supplied to the backend call.
   * @returns {Observable<T[]>}
   */
  protected getRequest( params?: any ): Observable<T[]> {
    return this.http.get<T[]>( `${ this.API_BASE_URL }`, this.getHttpOptions( params ) )
      .pipe(
        map( response =>  this.jsonConvert.deserialize( response,  this.type ) ),
        share(),
        catchError( this.handleError )
      );
  }

  /**
   * Return an observable containing an array of elements of type <T>
   * Returns previously cached response if applicable.
   * Cache is applicable if no parameters have been passed OR if the
   * supplied parameters do not differ from the last cached request.
   *
   * @param params: Object. An object containing parameters to be supplied to the backend call.
   * @returns {Observable<T[]>}
   */
  public get( params?: Object ): Observable<T[]> {
    // if (params) {
    //   if ( !this.cache$ || this.paramsChanged( params ) ) {
    //     this.storeParams( params );
    //     this.cache$ = this.getRequest( params )
    //       .pipe(
    //         shareReplay( 1 )
    //       );
    //   }
    // } else {
    //   this.cache$ = this.getRequest( )
    //     .pipe(
    //       shareReplay( 1 )
    //     );
    // }

    if ( !this.cache$ || this.paramsChanged( params ) ) {
      if (params) {
        this.storeParams( params );
      }

      this.cache$ = this.getRequest( params )
        .pipe(
          shareReplay( 1 )
        );
    }

    return this.cache$;
  }

  /**
   * Return an observable containing an element of type <T>
   * Is basically an alias for getByIdRequest()
   *
   * @param id: string. Unique identifier for object.
   * @returns {Observable<T>}
   */
  public getById( id?: string ): Observable<T> {
    return this.getByIdRequest( id );
  }


  public getByIdRequest( id: string, params?: any ): Observable<T> {
    return this.http.get<T>( `${ this.API_BASE_URL }/${ id }`, this.getHttpOptions( params ) )
      .pipe(
        map( response => this.jsonConvert.deserialize( response,  this.type ) ),
        share(),
        catchError( this.handleError )
      );
  }

  // consumes any key/value object and returns an HttpParams object
  protected getHttpParams( params?: any ): HttpParams {
    return new HttpParams( { fromObject: params } );
  }

  protected getHttpHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  protected getHttpOptions( params?: any ): Object {
    return new Object({
      headers: this.getHttpHeaders(),
      params: this.getHttpParams( params )
    });
  }

  protected handleError( error: HttpErrorResponse ): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error( 'An error occurred:', error.error.message );
    } else {
      // The backend returned an unsuccessful response code.
      console.error( 'Backend returned error', error );
    }
    return throwError( 'Something bad happened; please try again later.' );
  }

  protected paramsChanged( params: Object ): boolean {
    let changed = false;
    if ( !this.params ) {
      if ( this.collectParams() ) {
        this.params = this.collectParams();
      } else {
        return true;
      }
    }

    if ( params ) {
      Object.keys( params ).forEach( k => {
        if ( !( params[ k ] === this.params[ k ] ) ) {
          changed = true;
        }
      } );
    }

    return changed;
  }

  protected storeParams( params: Object ): void {
    this.params = params;
    localStorage.setItem( this.LOCALSTORAGE_KEY, JSON.stringify( params ) );
  }

  public collectParams(): Object {
    return JSON.parse( localStorage.getItem( this.LOCALSTORAGE_KEY ) );
  }
}
