import { Component, Input, OnChanges } from '@angular/core';

import { Player } from '../player.model';
import { PlayerScore } from './player-score.model';
import { PlayerScoreService } from './player-score.service';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.scss']
})
export class PlayerScoreComponent implements OnChanges {
  @Input() scores: PlayerScore[];
  public calucalatedScore: number[] = [];

  constructor(private scoreSvc: PlayerScoreService) { }

  ngOnChanges() {
    if (this.scores) { console.log('I have the scores', this.scores); }
  }
}
