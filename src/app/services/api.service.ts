import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { URLSearchParams } from '@angular/http';

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
		this.API_BASE_URL = 'https://api.spacexdata.com/v2';
    }
    
    // get all elements
	public getAll(params?: any): Observable<any> {
		const url = `${this.API_BASE_URL}`;
		return this.http.get(url, {search: this.getQueryParams(params)}).map((response: Response) => response.json());
	}

	// get element by id
	public getById(id: string): Observable<any> {
		const url = `${this.API_BASE_URL}/${id}`;
		return this.http.get(url).map((response: Response) => response.json());
    }

    // get the latest element
	public getLatest(params?: any) {
		const url = `${this.API_BASE_URL}/latest`;
		return this.http.get(url, {search: this.getQueryParams(params)});
	}

	// get the first scheduled element
	public getUpcoming(params?: any) {
		 const url = `${this.API_BASE_URL}/upcoming`;
		 return this.http.get(url, {search: this.getQueryParams(params)});
	}

	// consumes any key/value object and returns a UrlSearchParams object 
	protected getQueryParams(params?: any): URLSearchParams {
		let searchParams = new URLSearchParams();
		if (params) {
			Object.keys(params).forEach(function(key,index) {
				if (params[key] !== null) {
					searchParams.append(key, params[key]);
				}
			});
		}
        return searchParams;
    }
}