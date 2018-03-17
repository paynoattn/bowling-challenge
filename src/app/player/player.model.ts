import { PlayerScore } from './player-score/player-score.model';

export class Player {
  id: string;
  name: string;
  scores: PlayerScore[];
}
