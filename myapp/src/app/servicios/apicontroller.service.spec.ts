import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { APIControllerService } from './apicontroller.service';

describe('APIControllerService', () => {
  let service: APIControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [APIControllerService],
    });
    service = TestBed.inject(APIControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
