import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map'

/**
 * @name LaunchpadService
 * @description
 * This Service is used for retrieving data about launchpads used by SpaceX from `api.spacexdata.com`
 * @param Http injectable provided by angular for making http calls
 */
@Injectable()
export class LaunchpadService {
	// this will go in env variables
	private API_BASE_URL: string;

	constructor(private http: Http) {
		this.API_BASE_URL = 'http://api.spacexdata.com/v2/launchpads';
    }
    
    // get all launchpads
	public getAllLaunchpads(params?: URLSearchParams): Observable<any> {
		const url = `${this.API_BASE_URL}`;
		return this.http.get(url, {search: params}).map((response: Response) => response.json());
	}

	// get launchpad by id
	public getLaunchPadById(id: string): Observable<any> {
		const url = `${this.API_BASE_URL}/${id}`;
		return this.http.get(url).map((response: Response) => response.json());
	}
}