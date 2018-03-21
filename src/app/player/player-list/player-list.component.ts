import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/toPromise';

import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { PlayerScoreService } from '../player-score/player-score.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit, OnDestroy {
  public players = new MatTableDataSource<Player>([]);
  public playersLength = 0;
  public players$: Subscription;
  public bowlingPlayer: Player;
  public displayedColumns = [ 'name', 'rounds', 'score', 'actions' ];

  constructor(
    private playerSvc: PlayerService,
    private playerScoreSvc: PlayerScoreService
  ) { }

  public async handleScoreSave(player: Player) {
    await this.playerSvc.updatePlayer(player).toPromise();
    this.bowlingPlayer = undefined;
  }

  public getPlayerScore(player: Player) {
    return player && player.scores ? this.playerScoreSvc.calculateScores(player.scores) : 0;
  }

  public setPlayerBowling(player: Player) {
    this.bowlingPlayer = player;
  }

  public async deletePlayer(player: Player) {
    await this.playerSvc.removePlayer(player.id).toPromise();
  }

  ngOnInit() {
    this.players$ = this.playerSvc.players
      .subscribe(players => {
        this.playersLength = players.length;
        this.players.data = players;
      });
  }

  ngOnDestroy() {
    this.players$.unsubscribe();
  }
}
