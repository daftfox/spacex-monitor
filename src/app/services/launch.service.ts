import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/**
 * @name LaunchService
 * @description
 * This Service is used for retrieving data about launches from `api.spacexdata.com`
 * @param Http injectable provided by angular for making http calls
 */
@Injectable()
export class LaunchService {
	// this will go in env variables
	private API_BASE_URL: string;

	constructor(private http: Http) {
		this.API_BASE_URL = 'http://api.spacexdata.com/v2/launches';
    }
    
    // gets all launches
	public getAllLaunches(params?: URLSearchParams) {
		const url = `${this.API_BASE_URL}/all`;
		return this.http.get(url, {search: params});
	}

	// gets all past launches
	public getAllPastLaunches(params?: URLSearchParams) {
		const url = `${this.API_BASE_URL}`;
		return this.http.get(url, {search: params});
	}

	// gets the latest launch
	public getLatestLaunch(params?: URLSearchParams) {
		const url = `${this.API_BASE_URL}/latest`;
		return this.http.get(url, {search: params});
	}

	// gets the first scheduled launch to come
	public getUpcomingLaunch(params?: URLSearchParams) {
		 const url = `${this.API_BASE_URL}/upcoming`;
		 return this.http.get(url, {search: params});
	}
}