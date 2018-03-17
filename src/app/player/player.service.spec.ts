import { TestBed, inject } from '@angular/core/testing';
import { LocalForageService } from 'ngx-localforage';

import { PlayerService } from './player.service';
import { LocalForageServiceStub } from '../utilities/stubs/localforage.service.stub';

describe('PlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: LocalForageService, useClass: LocalForageServiceStub },
        PlayerService
      ]
    });
  });

  it('should be created', inject([PlayerService], (service: PlayerService) => {
    expect(service).toBeTruthy();
  }));
});
