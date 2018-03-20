import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { Player } from '../player.model';
import { PlayerService } from '../player.service';

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

  constructor(private playerSvc: PlayerService) { }

  public getPlayerScore(player: Player) {
    return player && player.scores ? player.scores : 0;
  }

  public setPlayerBowling(player: Player) {
    this.bowlingPlayer = player;
  }

  public async deletePlayer(player: Player) {
    await this.playerSvc.removePlayer(player.id).toPromise();
  }

  public ngOnInit() {
    this.players$ = this.playerSvc.players
      .subscribe(players => {
        this.playersLength = players.length;
        this.players.data = players;
      });
  }

  public ngOnDestroy() {
    this.players$.unsubscribe();
  }
}
