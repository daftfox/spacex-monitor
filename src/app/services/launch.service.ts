import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { ApiService } from './api.service';

/**
 * @name LaunchService
 * @description
 * This Service is used for retrieving data about launches from `api.spacexdata.com`
 * @param Http injectable provided by angular for making http calls
 * @extends ApiService
 */
@Injectable()
export class LaunchService extends ApiService{
	constructor(protected http: Http) {
		super(http);
		this.API_BASE_URL += '/launches';
	}
	
	// get all launches
	public getAll(params?: any): Observable<any> {
		const url = `${this.API_BASE_URL}/all`;
		return this.http.get(url, {search: super.getQueryParams(params)}).map((response: Response) => response.json());
	}

	// get all past launches
	public getAllPast(params: any) {
		super.getAll(params);
	}

	// get launch by id
	public getById(id: string): Observable<any> {
		const url = `${this.API_BASE_URL}?flight_number=${id}`;
		return this.http.get(url).map((response: Response) => response.json());
	}
}