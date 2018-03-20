import { Injectable } from '@angular/core';
import { LocalForageService } from 'ngx-localforage';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';

import { Player } from './player.model';

@Injectable()
export class PlayerService {
  private localForageKey = 'app-players';
  private _players = new ReplaySubject<Player[]>(1);
  private _players$ = false;

  constructor(private localForage: LocalForageService) { }

  /**
   * A getter that returns the players and initializes
   * the players subject.
   */
  get players(): Observable<Player[]> {
    // has the subject been initialized?
    return this._players$ ?
      // if yes return subject
      this._players.asObservable() :
      // if not get players from cache, set and return subject.
      this.getPlayerCache();
  }

  /**
   * Add a new player to the store.
   * @param {Player} player the player to add
   */
  addPlayer(firstName: string): Observable<Player[]> {
    const player = this.newPlayer(firstName);
    return this._players.take(1)
      .map(players => { players.push(player); return players; })
      .do(players => this.updatePlayers(players));
  }

  /**
   * Update an existing player in the store
   * @param {Player} playerPatch the player to update
   */
  updatePlayer(playerPatch: Player) {
    return this._players.take(1)
      .map(players => {
        players[players.findIndex(player => player.id === playerPatch.id)] = playerPatch;
        return players;
      })
      .do(players => this.updatePlayers(players));
  }

  /**
   * Clear all the players in store.
   */
  clearPlayers(): Observable<void> {
    return this.localForage.removeItem(this.localForageKey)
      .do(() => this.updatePlayers([]));
  }

  /**
   * Remove a specific player from the store.
   * @param {playerID} playerId the guid of the player
   */
  removePlayer(playerId: string) {
    return this._players.take(1)
      .map(players => players.filter(player => player.id !== playerId))
      .do(players => this.updatePlayers(players));
  }

  /**
   * Update all the players in the store
   * @param {Player[]} players
   */
  updatePlayers(players: Player[]): void {
    this.localForage.setItem(this.localForageKey, players)
      .subscribe(updatePlayers => this._players.next(updatePlayers));
  }

  /**
  * Helper method for creating player.
  * @param {string} name
  */
  private newPlayer(name: string): Player {
    const ret = new Player();
    ret.id = this.newPlayerGuid();
    ret.name = name;
    return ret;
  }

  /**
   * Get the player from localforage cache
   */
  private getPlayerCache(): Observable<Player[]> {
    return this.localForage.getItem(this.localForageKey)
      // map response to unsure no undefined or null values
      .map(res => res && res.length ? res : [])
      // set the player$ to true and subject (for next getter call)
      .do(players => (this._players$ = true, this._players.next(players)))
      // return the subject so the first getter gets changes
      .switchMap(players => this._players.asObservable());
  }

  /**
   * Create a quick and dirty guid.
   * I know... not a real guid. Good enough
   */
  private newPlayerGuid(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}
