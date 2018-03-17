import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';

import { PlayerAddComponent } from './player-add.component';

describe('PlayerAddComponent', () => {
  let component: PlayerAddComponent;
  let fixture: ComponentFixture<PlayerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerAddComponent ],
      imports: [
        FormsModule,
        MatDialogModule,
        ReactiveFormsModule
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
