import { Component, Input } from '@angular/core';

import { Player } from '../player.model';
import { PlayerScore } from './player-score.model';
import { PlayerScoreService } from './player-score.service';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.scss'],
})
export class PlayerScoreComponent {
  @Input() scores: PlayerScore[];
  public calucalatedScores: number[] = [];

  constructor(private scoreSvc: PlayerScoreService) { }
}
