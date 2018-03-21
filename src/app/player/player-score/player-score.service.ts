import { Injectable } from '@angular/core';

import { PlayerScore } from './player-score.model';

@Injectable()
export class PlayerScoreService {

  calculateScore(scores: PlayerScore[], frameIndex: number) {
    return scores;
  }

  calculateScores(scores: PlayerScore[]) {
    return 0;
  }
}
