import { PlayerScore } from './player-score.model';

export class PlayerScoreServiceStub {
  calculateScore(scores: PlayerScore[], frameIndex: number) {
    return scores;
  }

  calculateScores(scores: PlayerScore[]) {
    return 0;
  }
}
