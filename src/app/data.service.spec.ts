import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

describe('DataService', () => {
  class MockHttpService {
    get() {}
    post() {}
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataService,
        { provide: HttpClient, UserClass: MockHttpService }
      ]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
