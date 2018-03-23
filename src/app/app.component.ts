import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { PlayerService } from './player/player.service';
import { PlayerAddComponent } from './player/player-add/player-add.component';
import { Player } from './player/player.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private playerSvc: PlayerService,
    private dialog: MatDialog
  ) { }

  addPlayer() {
    this.dialog.open(PlayerAddComponent, { minWidth: '30vw', maxWidth: '90vw' });
  }

  async clearAllPlayers() {
    await this.playerSvc.clearPlayers().toPromise();
  }
}
