import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Player } from './player.model';
import { mockPlayer } from './player.mock';

export class PlayerServiceStub {
  players = Observable.of([mockPlayer()]);

  newPlayer(name: string): Player {
    return mockPlayer();
  }

  addPlayer(player: Player): Observable<Player[]> {
    return Observable.of([mockPlayer(), mockPlayer()]);
  }

  updatePlayer(playerPatch: Player): Observable<Player[]> {
    return Observable.of([mockPlayer(), mockPlayer()]);
  }

  clearPlayers(): Observable<void> {
    return Observable.of();
  }

  removePlayer(playerId: string): Observable<Player[]> {
    return Observable.of([mockPlayer()]);
  }

  updatePlayers(players: Player[]): Observable<Player[]> {
    return Observable.of([mockPlayer(), mockPlayer()]);
  }
}
