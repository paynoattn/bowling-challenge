import { PlayerScore } from './player-score.model';

export class PlayerScoreServiceStub {
  calculateFrameScores(scores: PlayerScore[], frameIndex: number) {
    return scores.map(score => Math.floor(Math.random() * 10));
  }

  calculateTotalScores(scores: PlayerScore[]) {
    return 0;
  }
}
