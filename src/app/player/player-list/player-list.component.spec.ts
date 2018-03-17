import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PlayerService } from '../player.service';
import { PlayerServiceStub } from '../player.service.stub';
import { PlayerListComponent } from './player-list.component';

describe('PlayerListComponent', () => {
  let component: PlayerListComponent;
  let fixture: ComponentFixture<PlayerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerListComponent ],
      providers: [
        { provide: PlayerService, useClass: PlayerServiceStub }
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
