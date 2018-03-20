import { Component } from '@angular/core';
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

  public async save() {
    this.playerSvc.addPlayer(this.playerName)
      .subscribe(() => this.dialog.close())
      .unsubscribe();
  }
}
