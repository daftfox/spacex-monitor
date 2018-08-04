import {TestBed, inject, async} from '@angular/core/testing';

import { AppModule } from '../app.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LaunchService } from './launch.service';
import {environment} from '../../environments/environment';
import {APP_BASE_HREF} from '@angular/common';

describe('ApiService', () => {
  let launchService: LaunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaunchService, HttpClientTestingModule, { provide: APP_BASE_HREF, useValue : '/' }],
      imports: [AppModule, HttpClientTestingModule]
    });

    launchService = TestBed.get(LaunchService);
  });

  it('should be created', () => {
    expect(launchService).toBeTruthy();
  });
  
});
