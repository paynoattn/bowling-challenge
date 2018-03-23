import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { Player } from '../player.model';
import { PlayerScore } from './player-score.model';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.scss']
})
export class PlayerScoreComponent implements OnChanges {
  @Input() bowlingPlayer: Player;
  @Output() saveScoreOutput = new EventEmitter<Player>();
  public score: PlayerScore;
  public readyForSave = false;

  ngOnChanges() {
    this.readyForSave = false;
    this.score = new PlayerScore();
    if (
      this.bowlingPlayer && !this.bowlingPlayer.scores ||
      this.bowlingPlayer && !this.bowlingPlayer.scores.length
    ) {
      this.bowlingPlayer.scores = [];
      this.score.index = 0;
    } else if (this.bowlingPlayer && this.bowlingPlayer.scores && this.bowlingPlayer.scores.length) {
      this.score.index = this.bowlingPlayer.scores.length;
    }
  }

  public isFinalFrame() {
    return (this.score && this.score.index === 9 && this.score.pinsHit.length < 3) ? true : false;
  }

  public enterStrike() {
    this.score.pinsHit.push(10);
    this.score.strike = true;
    if (
      this.score.index < 9 ||
      this.score.pinsHit.length > 2
    ) {
      this.readyForSave = true;
    }
  }

  public enterSpare() {
    this.score.pinsHit.push(10 - this.score.pinsHit[0]);
    this.score.spare = true;
    if (
      this.score.index < 9 ||
      this.score.pinsHit.length > 2
    ) {
      this.readyForSave = true;
    }
  }

  public enterPins($event) {
    const pins = parseInt($event.target.value, 10);
    this.score.pinsHit.push(pins);
    if (
      this.score.pinsHit.length > 1 && this.score.index < 9 ||
      this.score.pinsHit.length > 2
    ) {
      this.readyForSave = true;
    }
  }

  public saveScore() {
    const emittedPlayer = this.bowlingPlayer;
    emittedPlayer.scores.push(this.score);
    this.saveScoreOutput.emit(emittedPlayer);
  }
}
