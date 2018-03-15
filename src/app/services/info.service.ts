import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

/**
 * @name InfoService
 * @description
 * This Service is used for retrieving data about SpaceX from `api.spacexdata.com`
 * @param Http injectable provided by angular for making http calls
 * @extends ApiService
 */
@Injectable()
export class InfoService extends ApiService {

	constructor(protected http: Http) {
		super(http);
		this.API_BASE_URL += '/info';
	}
}