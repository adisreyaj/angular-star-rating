import { TestBed } from '@angular/core/testing';

import { StarRatingService } from './star-rating.service';

describe('StarRatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarRatingService = TestBed.get(StarRatingService);
    expect(service).toBeTruthy();
  });
});
