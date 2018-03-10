import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from './api.service';

/**
 * @name RocketService
 * @description
 * This Service is used for retrieving data about rockets from `api.spacexdata.com`
 * @param Http injectable provided by angular for making http calls
 * @extends ApiService
 */
@Injectable()
export class RocketService extends ApiService {
	constructor(protected http: Http) {
		super(http);
		this.API_BASE_URL += '/rockets';
    }
}