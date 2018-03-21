import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';

import { PlayerAddComponent } from './player-add/player-add.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerScoreComponent } from './player-score/player-score.component';
import { PlayerScoreService } from './player-score/player-score.service';
import { PlayerService } from './player.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [
    PlayerService,
    PlayerScoreService
  ],
  declarations: [
    PlayerAddComponent,
    PlayerListComponent,
    PlayerScoreComponent
  ],
  exports: [
    PlayerAddComponent,
    PlayerListComponent,
    PlayerScoreComponent
  ],
  entryComponents: [
    PlayerAddComponent
  ]
})
export class PlayerModule { }
