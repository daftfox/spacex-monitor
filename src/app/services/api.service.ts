import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map'

/**
 * @name ApiService
 * @description
 * This Service is used for retrieving data from `api.spacexdata.com`
 * @param Http injectable provided by angular for making http calls
 */
@Injectable()
export class ApiService {
	// this will go in env variables
	protected API_BASE_URL: string;

	constructor(protected http: Http) {
		this.API_BASE_URL = 'http://api.spacexdata.com/v2';
    }
    
    // get all elements
	public getAll(params?: URLSearchParams): Observable<any> {
		const url = `${this.API_BASE_URL}`;
		return this.http.get(url, {search: params}).map((response: Response) => response.json());
	}

	// get element by id
	public getById(id: string): Observable<any> {
		const url = `${this.API_BASE_URL}/${id}`;
		return this.http.get(url).map((response: Response) => response.json());
    }

    // get the latest element
	public getLatest(params?: URLSearchParams) {
		const url = `${this.API_BASE_URL}/latest`;
		return this.http.get(url, {search: params});
	}

	// get the first scheduled element
	public getUpcoming(params?: URLSearchParams) {
		 const url = `${this.API_BASE_URL}/upcoming`;
		 return this.http.get(url, {search: params});
	}
}