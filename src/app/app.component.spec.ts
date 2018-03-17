import { TestBed, async } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerService } from './player/player.service';
import { PlayerServiceStub } from './player/player.service.stub';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [
        { provide: PlayerService, useClass: PlayerServiceStub }
      ],
      imports: [ MatDialogModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
