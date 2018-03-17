import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit, OnDestroy {
  players: Player[];
  players$: Subscription;

  constructor(private playerSvc: PlayerService) { }

  ngOnInit() {
    this.playerSvc.players
      .subscribe(players => this.players = players);
  }

  ngOnDestroy() {
    this.players$.unsubscribe();
  }
}
