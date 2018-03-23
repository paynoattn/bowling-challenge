import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PlayerScoreAddComponent } from './player-score-add.component';

describe('PlayerScoreAddComponent', () => {
  let component: PlayerScoreAddComponent;
  let fixture: ComponentFixture<PlayerScoreAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerScoreAddComponent],
      imports: [ FormsModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerScoreAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
