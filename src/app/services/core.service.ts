import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from './api.service';

/**
 * @name CoreService
 * @description
 * This Service is used for retrieving data about cores from `api.spacexdata.com`
 * @param Http injectable provided by angular for making http calls
 * @extends ApiService
 */
@Injectable()
export class CoreService extends ApiService {
	constructor(protected http: Http) {
		super(http);
		this.API_BASE_URL += '/parts/cores';
    }
}