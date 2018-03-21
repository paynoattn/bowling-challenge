import { TestBed, inject } from '@angular/core/testing';

import { PlayerScoreService } from './player-score.service';

describe('PlayerScoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerScoreService]
    });
  });

  it('should be created', inject([PlayerScoreService], (service: PlayerScoreService) => {
    expect(service).toBeTruthy();
  }));
});
