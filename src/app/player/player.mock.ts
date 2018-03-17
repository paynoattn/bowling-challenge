import * as faker from 'faker';

import { Player } from './player.model';

export function mockPlayer(): Player {
  return {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    scores: []
  };
}

