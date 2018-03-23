import { Injectable } from '@angular/core';

import { PlayerScore } from './player-score.model';
import { ArrayHelpers } from '../../utilities/helper-fns/array-fn';

@Injectable()
export class PlayerScoreService {

  calculateFrameScores(scores: PlayerScore[]): number[] {
    const ret = [];
    for (let frame = 0; frame < scores.length; frame++) {
      const frameScore = scores[frame];
      const baseScore = ArrayHelpers.calculateTotal(frameScore.pinsHit);
      let addScore = 0;
      if (frame === 9) {
        if (frameScore.strike) {
          addScore += ArrayHelpers.calculateTotal(frameScore.pinsHit.filter(s => s === 10));
        }
        if (frameScore.spare) {
          const spareScore = frameScore.pinsHit[0] + frameScore.pinsHit[1] === 10 ?
            frameScore.pinsHit[0] + frameScore.pinsHit[1] :
            frameScore.pinsHit[1] + frameScore.pinsHit[2] === 10 ?
            frameScore.pinsHit[1] + frameScore.pinsHit[2] :
            0;
          addScore += spareScore;
        }
      } else if (frameScore.strike) {
        // if there is two pins hit in the next frame
        addScore += scores[frame + 1] && scores[frame + 1].pinsHit.length < 1 ?
          ArrayHelpers.calculateTotal(scores[frame + 1].pinsHit) :
          // if there is only pin hit in the next frame and a second frame
          scores[frame + 1] && scores[frame + 1].pinsHit.length === 1 && scores[frame + 2] ?
          scores[frame + 1].pinsHit[0] + scores[frame + 2].pinsHit[0] :
          // if there is only one pin hit in the next frame and no second frame
          scores[frame + 1] && scores[frame + 1].pinsHit.length ?
          scores[frame + 1].pinsHit[0] :
          // else
          0;
      } else if (frameScore.spare) {
        addScore += scores[frame + 1] ?
          scores[frame + 1].pinsHit[0] :
          0;
      }
      ret.push(baseScore + addScore);
    }
    return ret;
  }

  calculateTotalScores(scores: PlayerScore[]) {
    return ArrayHelpers.calculateTotal(this.calculateFrameScores(scores));
  }
}
