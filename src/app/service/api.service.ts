import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { JsonConvert, OperationMode, ValueCheckingMode } from 'json2typescript';
import { environment } from '../../environments/environment';

/**
 * @name ApiService
 * @description
 * This Service is used for retrieving data from an external API defined in todo
 * @param Http injectable provided by angular for making http calls
 */
export class ApiService<T> {
  protected API_BASE_URL = environment.API_URL;

  protected jsonConvert: JsonConvert;

  constructor(protected http: HttpClient,
              private type: any) {
    this.jsonConvert = new JsonConvert();
    // this.jsonConvert.operationMode = OperationMode.LOGGING;
    this.jsonConvert.ignorePrimitiveChecks = false;
    this.jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
  }

  // get all elements
  public get( params?: any ): Observable<T[]> {
    return this.http.get<T[]>( `${this.API_BASE_URL}`, this.getHttpOptions( params ) )
      .pipe(
        map( ( response ) =>  {
          // console.log(response);
          // if ( !this.type ) {
          //   return response;
          // } else {
            return this.jsonConvert.deserializeArray( response,  this.type );
          // }
        } ),
        retry(3),
        catchError( this.handleError )
      );
  }

  // get element by id
  public getById( id: string, params?: any ): Observable<T> {
    return this.http.get<T>( `${this.API_BASE_URL}/${id}`, this.getHttpOptions( params ) )
      .pipe(
        map( response => this.jsonConvert.deserialize( response,  this.type ) ),
        retry(3),
        catchError( this.handleError )
      );
  }

  public create( body: T, params?: any ): Observable<{}> { // todo: add better typing based on backend response
    return this.http.post( `${this.API_BASE_URL}`, body, this.getHttpOptions( params ) )
      .pipe(
        map( response => this.jsonConvert.deserialize( response,  this.type ) ),
        catchError( this.handleError )
      );
  }

  public update( body: T, params?: any ): Observable<{}> { // todo: add better typing based on backend response
    return this.http.put( `${this.API_BASE_URL}`, body, this.getHttpOptions( params ) )
      .pipe(
        map( response => this.jsonConvert.deserialize( response,  this.type )),
        catchError( this.handleError )
      );
  }

  public delete( id: number, params?: any ): Observable<{}> { // todo: add better typing based on backend response
    return this.http.delete( `${this.API_BASE_URL}/${id}`, this.getHttpOptions( params ) )
      .pipe(
        map( response => this.jsonConvert.deserialize( response,  this.type ) ),
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

  protected handleError( error: HttpErrorResponse ) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error( 'An error occurred:', error.error.message );
    } else {
      // The backend returned an unsuccessful response code.
      console.error( 'Backend returned error', error );
    }
    return throwError( 'Something bad happened; please try again later.' );
  }
}
