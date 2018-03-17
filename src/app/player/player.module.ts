import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerAddComponent } from './player-add/player-add.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerScoreComponent } from './player-score/player-score.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlayerAddComponent,
    PlayerListComponent,
    PlayerScoreComponent
  ],
  exports: [
    PlayerAddComponent,
    PlayerListComponent
  ]
})
export class PlayerModule { }
