import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PlayerService } from '../player.service';
import { PlayerServiceStub } from '../player.service.stub';
import { PlayerListComponent } from './player-list.component';
import { PlayerScoreService } from '../player-score/player-score.service';
import { PlayerScoreServiceStub } from '../player-score/player-score.service.stub';

describe('PlayerListComponent', () => {
  let component: PlayerListComponent;
  let fixture: ComponentFixture<PlayerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerListComponent ],
      imports: [ MatTableModule ],
      providers: [
        { provide: PlayerService, useClass: PlayerServiceStub },
        { provide: PlayerScoreService, useClass: PlayerScoreServiceStub }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
