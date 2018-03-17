import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { PlayerService } from '../player.service';


@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.scss']
})
export class PlayerAddComponent {
  playerName: string;

  constructor(
    private dialog: MatDialogRef<PlayerAddComponent>,
    private playerSvc: PlayerService
  ) { }

  cancel() {
    this.dialog.close();
  }

  save() {
    const newPlayer = this.playerSvc.newPlayer(this.playerName);
    this.playerSvc.addPlayer(newPlayer)
      .subscribe(() => this.dialog.close());
  }
}
