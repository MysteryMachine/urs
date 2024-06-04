import { ReactNode } from 'react';

export interface Retainer {
  size: number;
  location: string;
}

export interface Service {
  name: string;
  cost?: number;
  billed?: number;
  description?: ReactNode;
  tags?: string[];
  size?: [number, number];
  sortNum: number;
}

export const ADVENTURER_ID = 'ADVENTURER_ID';
export const SMALL_RETAINER_ID = 'SMALL_RETAINER_ID';
export const MEDIUM_RETAINER_ID = 'MEDIUM_RETAINER_ID';
export const LARGE_RETAINER_ID = 'LARGE_RETAINER_ID';
export const INN_STAY_ID = 'INN_STAY_ID';
export const COOK_ID = 'COOK_ID';
export const SQUIRE_ID = 'SQUIRE_ID';
export const GUARD_ID = 'GUARD_ID';
export const FORAGER_ID = 'FORAGER_ID';
export const HEALER_ID = 'HEALER_ID';
export const FISHERMAN_ID = 'FISHERMAN_ID';
export const COACHMAN_ID = 'COACHMAN_ID';
export const HERDER_ID = 'HERDER_ID';
export const SHIP_PASSAGE_ID = 'SHIP_PASSAGE_ID';
export const POOR_BRIBE_ID = 'POOR_BRIBE_ID';
export const NOBLE_BRIBE_ID = 'NOBLE_BRIBE_ID';
export const SCOUT_ID = 'SCOUT_ID';

export const TAGS = {
  UNSPECIALIZED: 'Unspecialized',
  SPECIALIZED: 'Specialized',
  RETAINER: 'Retainer',
};
export const SERVICES: Record<string, Service> = {
  [SMALL_RETAINER_ID]: {
    sortNum: 0,
    name: 'Small retainer',
    size: [1, 9],
    description: 'given to knights, and minor nobility.',
    tags: [TAGS.RETAINER],
  },
  [MEDIUM_RETAINER_ID]: {
    sortNum: 1,
    name: 'Medium retainer',
    size: [10, 50],
    description:
      'given to the heads of noble families, barons, dukes, and so on.',
    tags: [TAGS.RETAINER],
  },
  [LARGE_RETAINER_ID]: {
    sortNum: 2,
    name: 'Large retainer',
    size: [50, 200],
    description: 'given to members of the royal family.',
    tags: [TAGS.RETAINER],
  },
  [INN_STAY_ID]: {
    sortNum: 10,
    name: 'A day’s rest at an inn.',
    cost: 1,
    billed: 1,
    tags: [TAGS.UNSPECIALIZED],
  },
  [SQUIRE_ID]: {
    sortNum: 100,
    name: 'Squire',
    cost: 5,
    billed: 7,
    description:
      'When traveling in dungeons, squires keep a safe distance back and can hold up to 6 units of weight worth of items for the party.',
    tags: [TAGS.UNSPECIALIZED],
  },
  [GUARD_ID]: {
    sortNum: 101,
    name: 'Guard',
    cost: 7,
    billed: 7,
    description:
      'Used to guard camp and party property. When returning to camp, each guard adds a +1 bonus to your roll. In combat, they are controlled by the Storyteller, they have 4 base hit points, a 1d4 hit dice, and can use all natural and combat skills with a +0 modifier.',
    tags: [TAGS.UNSPECIALIZED],
  },
  [COOK_ID]: {
    sortNum: 102,
    name: 'Cook',
    cost: 7,
    billed: 7,
    description: 'When consuming rations at camp, heal 1d4.',
    tags: [TAGS.UNSPECIALIZED],
  },
  [FORAGER_ID]: {
    sortNum: 103,
    name: 'Forager',
    cost: 7,
    billed: 7,
    description:
      'When traveling through forests, forage 1d4-1 rations per day.',
    tags: [TAGS.UNSPECIALIZED],
  },
  [HEALER_ID]: {
    sortNum: 104,
    name: 'Healer',
    cost: 10,
    billed: 7,
    description: 'When resting, heal an additional 2d4.',
    tags: [TAGS.UNSPECIALIZED],
  },
  [FISHERMAN_ID]: {
    sortNum: 105,
    name: 'Fisherman',
    cost: 7,
    billed: 7,
    description:
      'When traveling by boat or near rivers, forage 1d6 rations per day.',
    tags: [TAGS.UNSPECIALIZED],
  },
  [COACHMAN_ID]: {
    sortNum: 106,
    name: 'Coachman',
    cost: 7,
    billed: 7,
    tags: [TAGS.UNSPECIALIZED],
  },
  [HERDER_ID]: {
    sortNum: 107,
    name: 'Herder',
    cost: 7,
    billed: 7,
    tags: [TAGS.UNSPECIALIZED],
  },
  [SHIP_PASSAGE_ID]: {
    sortNum: 10,
    name: 'Passage on a ship',
    cost: 7,
    billed: 7,
    tags: [TAGS.UNSPECIALIZED],
  },
  [POOR_BRIBE_ID]: {
    sortNum: 200,
    name: 'A poor man’s bribe',
    cost: 10,
    billed: 0,
    tags: [TAGS.UNSPECIALIZED],
  },
  [NOBLE_BRIBE_ID]: {
    sortNum: 201,
    name: 'A noble’s bribe',
    cost: 50,
    billed: 0,
    tags: [TAGS.UNSPECIALIZED],
  },
  [ADVENTURER_ID]: {
    sortNum: 110,
    name: 'Adventurer',
    cost: 30,
    billed: 7,
    description:
      'Knowledgeable in traps and lockpicking, the adventurer can accompany the party, and use the Lockpick, Disarm, and Search for Traps skills with a +1 modifier. In combat, they are controlled by the Storyteller, they have 10 base hit points, a 1d6 hit dice, and can use all natural and combat skills with a +0 modifier.',
    tags: [TAGS.SPECIALIZED],
  },
  [SCOUT_ID]: {
    sortNum: 111,
    name: 'Scout',
    cost: 12,
    billed: 7,
    description: 'Can use the Scout skill with a +1 modifier.',
    tags: [TAGS.SPECIALIZED],
  },
};

export const SERVICES_ARR = Object.values(SERVICES).sort(
  (a, b) => a.sortNum - b.sortNum
);
