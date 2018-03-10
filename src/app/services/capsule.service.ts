import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

/**
 * @name CapsuleService
 * @description
 * This Service is used for retrieving data about capsules from `api.spacexdata.com`
 * @param Http injectable provided by angular for making http calls
 * @extends ApiService
 */
@Injectable()
export class CapsuleService extends ApiService {

	constructor(protected http: Http) {
		super(http);
		this.API_BASE_URL += '/capsules';
	}
}