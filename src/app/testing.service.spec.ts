import { TestBed, inject } from '@angular/core/testing';

import { TestingService } from './testing.service';

describe('TestingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestingService]
    });
  });

  it('should be created', inject([TestingService], (service: TestingService) => {
    expect(service).toBeTruthy();
  }));

  it('return value to be inverse', inject([TestingService], (service: TestingService) => {
    expect(service.convertIt(true)).not.toBeTruthy();
  }));
});
