import { ReactNode } from 'react';

export interface Property {
  value?: number;
  name: string;
  description: ReactNode;
  location?: string;
  additionalInformation?: ReactNode;
}

export const PROPERTIES: Property[] = [
  {
    name: 'Title',
    description:
      'a title one may hold in a specific settlement, may confer benefits',
  },
  {
    value: 50,
    name: 'Donkey',
    description:
      'Camp is capable of traveling with an extra 20 units of weight. Requires a herder per 10 donkeys if the party has more than 1 per person.',
  },
  {
    value: 40,
    name: 'Goat',
    description:
      'Can be slaughtered for 3 rations with 5 uses each. Requires a herder per every 10 goats.',
  },
  {
    value: 100,
    name: 'Horse',
    description: 'If there is a horse for every two people traveling.',
  },
  {
    value: 100,
    name: 'Carriage',
    description:
      'Camp is capable of traveling with an extra 50 units of weight. Requires a coachman and a horse. Can only be driven down roads.',
  },
  {
    value: 500,
    name: 'Yacht',
    description:
      'requires someone with the Captain skill, transports up to 10 people, capable of traveling with 100 extra units of weight. Requires a settlement with the Port tag.',
  },
  {
    value: 5000,
    name: 'Ship',
    description:
      'requires someone with the Captain skill, and a crew of 15 people, transports up to 100 people, capable of traveling with 1000 extra units of weight. Requires a settlement with the Port tag.',
  },
  {
    value: 200,
    name: 'Cottage',
    description:
      'Takes one week to build. Can store rations and tools, as well as house 4 people. The house must be kept by at least one person.',
  },
  {
    value: 1000,
    name: 'House',
    description:
      'Takes 2 weeks to build. Can store rations, tools, and up to 1000 coins of goods and property. It can house up to 8 people. The house must be kept by two guards.',
  },
  {
    value: 5000,
    name: 'Mansion',
    description:
      'Takes a month to build. Can store rations, tools, and up to 5000 coins of goods and property, as long as residents exist within. It can house up to 16 people. The house must be kept by 4 guards.',
  },
];

export const COTTAGE_ID = PROPERTIES.findIndex((p) => p.name === 'Cottage');
export const DONKEY_ID = PROPERTIES.findIndex((p) => p.name === 'Donkey');
export const HORSE_ID = PROPERTIES.findIndex((p) => p.name === 'Horse');
export const TITLE_ID = PROPERTIES.findIndex((p) => p.name === 'Title');