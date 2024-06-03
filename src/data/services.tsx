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
}

export const TAGS = {
  UNSPECIALIZED: 'Unspecialized',
  SPECIALIZED: 'Specialized',
  RETAINER: 'Retainer',
};

export const RETAINERS: Service[] = [
  {
    name: 'Small retainer',
    size: [1, 9],
    description: 'given to knights, and minor nobility.',
    tags: [TAGS.RETAINER],
  },
  {
    name: 'Medium retainer',
    size: [10, 50],
    description:
      'given to the heads of noble families, barons, dukes, and so on.',
    tags: [TAGS.RETAINER],
  },
  {
    name: 'Large retainer',
    size: [50, 200],
    description: 'given to members of the royal family.',
    tags: [TAGS.RETAINER],
  },
];

export const SERVICES: Service[] = [
  ...RETAINERS,
  {
    name: 'A day’s rest at an inn.',
    cost: 1,
    billed: 1,
    tags: [TAGS.UNSPECIALIZED],
  },
  {
    name: 'Squire',
    cost: 5,
    billed: 7,
    description:
      'When traveling in dungeons, squires keep a safe distance back and can hold up to 6 units of weight worth of items for the party.',
    tags: [TAGS.UNSPECIALIZED],
  },
  {
    name: 'Guard',
    cost: 7,
    billed: 7,
    description:
      'Used to guard camp and party property. When returning to camp, each guard adds a +1 bonus to your roll. In combat, they are controlled by the Storyteller, they have 4 base hit points, a 1d4 hit dice, and can use all natural and combat skills with a +0 modifier.',
    tags: [TAGS.UNSPECIALIZED],
  },
  {
    name: 'Cook',
    cost: 7,
    billed: 7,
    description: 'When consuming rations at camp, heal 1d4.',
    tags: [TAGS.UNSPECIALIZED],
  },
  {
    name: 'Forager',
    cost: 7,
    billed: 7,
    description:
      'When traveling through forests, forage 1d4-1 rations per day.',
    tags: [TAGS.UNSPECIALIZED],
  },
  {
    name: 'Healer',
    cost: 10,
    billed: 7,
    description: 'When resting, heal an additional 2d4.',
    tags: [TAGS.UNSPECIALIZED],
  },
  {
    name: 'Fisherman',
    cost: 7,
    billed: 7,
    description:
      'When traveling by boat or near rivers, forage 1d6 rations per day.',
    tags: [TAGS.UNSPECIALIZED],
  },
  {
    name: 'Coachman',
    cost: 7,
    billed: 7,
    tags: [TAGS.UNSPECIALIZED],
  },
  {
    name: 'Herder',
    cost: 7,
    billed: 7,
    tags: [TAGS.UNSPECIALIZED],
  },
  {
    name: 'Passage on a ship',
    cost: 7,
    billed: 7,
    tags: [TAGS.UNSPECIALIZED],
  },
  {
    name: 'A poor man’s bribe',
    cost: 10,
    billed: 0,
    tags: [TAGS.UNSPECIALIZED],
  },
  {
    name: 'A noble’s bribe',
    cost: 50,
    billed: 0,
    tags: [TAGS.UNSPECIALIZED],
  },
  {
    name: 'Adventurer',
    cost: 30,
    billed: 7,
    description:
      'Knowledgeable in traps and lockpicking, the adventurer can accompany the party, and use the Lockpick, Disarm, and Search for Traps skills with a +1 modifier. In combat, they are controlled by the Storyteller, they have 10 base hit points, a 1d6 hit dice, and can use all natural and combat skills with a +0 modifier.',
    tags: [TAGS.SPECIALIZED],
  },
  {
    name: 'Scout',
    cost: 12,
    billed: 7,
    description: 'Can use the Scout skill with a +1 modifier.',
    tags: [TAGS.SPECIALIZED],
  },
];

export const ADVENTURER_ID = SERVICES.findIndex(
  (i) => i.name === 'Adventurer'
);