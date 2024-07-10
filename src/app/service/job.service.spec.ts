import { TestBed } from '@angular/core/testing';

import { JobService } from './job.service';
import { HttpClientModule } from '@angular/common/http';

describe('JobService', () => {
  let service: JobService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(JobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
