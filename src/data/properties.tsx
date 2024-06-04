import { ReactNode } from 'react';

export interface Property {
  value?: number;
  name: string;
  description: ReactNode;
  location?: string;
  additionalInformation?: ReactNode;
  sortNum: number;
}

export const COTTAGE_ID = 'COTTAGE_ID';
export const DONKEY_ID = 'DONKEY_ID';
export const HORSE_ID = 'HORSE_ID';
export const TITLE_ID = 'TITLE_ID';
export const GOAT_ID = 'GOAT_ID';
export const CARRIAGE_ID = 'CARRIAGE_ID';
export const MANSION_ID = 'MANSION_ID';
export const HOUSE_ID = 'HOUSE_ID';
export const SHIP_ID = 'SHIP_ID';
export const YACHT_ID = 'YACHT_ID';

export const PROPERTIES: Record<string, Property> = {
  [TITLE_ID]: {
    name: 'Title',
    sortNum: 0,
    description:
      'a title one may hold in a specific settlement, may confer benefits',
  },
  [DONKEY_ID]: {
    value: 50,
    name: 'Donkey',
    sortNum: 10,
    description:
      'Camp is capable of traveling with an extra 20 units of weight. Requires a herder per 10 donkeys if the party has more than 1 per person.',
  },
  [GOAT_ID]: {
    value: 40,
    sortNum: 11,
    name: 'Goat',
    description:
      'Can be slaughtered for 3 rations with 5 uses each. Requires a herder per every 10 goats.',
  },
  [HORSE_ID]: {
    value: 100,
    sortNum: 12,
    name: 'Horse',
    description: 'If there is a horse for every two people traveling.',
  },
  [CARRIAGE_ID]: {
    value: 100,
    sortNum: 100,
    name: 'Carriage',
    description:
      'Camp is capable of traveling with an extra 50 units of weight. Requires a coachman and a horse. Can only be driven down roads.',
  },
  [YACHT_ID]: {
    value: 500,
    name: 'Yacht',
    sortNum: 101,
    description:
      'requires someone with the Captain skill, transports up to 10 people, capable of traveling with 100 extra units of weight. Requires a settlement with the Port tag.',
  },
  [SHIP_ID]: {
    value: 5000,
    sortNum: 102,
    name: 'Ship',
    description:
      'requires someone with the Captain skill, and a crew of 15 people, transports up to 100 people, capable of traveling with 1000 extra units of weight. Requires a settlement with the Port tag.',
  },
  [COTTAGE_ID]: {
    value: 200,
    sortNum: 200,
    name: 'Cottage',
    description:
      'Takes one week to build. Can store rations and tools, as well as house 4 people. The house must be kept by at least one person.',
  },
  [HOUSE_ID]: {
    value: 1000,
    sortNum: 201,
    name: 'House',
    description:
      'Takes 2 weeks to build. Can store rations, tools, and up to 1000 coins of goods and property. It can house up to 8 people. The house must be kept by two guards.',
  },
  [MANSION_ID]: {
    value: 5000,
    sortNum: 202,
    name: 'Mansion',
    description:
      'Takes a month to build. Can store rations, tools, and up to 5000 coins of goods and property, as long as residents exist within. It can house up to 16 people. The house must be kept by 4 guards.',
  },
};

export const PROPERTIES_ARR: Property[] = Object.values(PROPERTIES).sort(
  (a, b) => a.sortNum - b.sortNum
);
