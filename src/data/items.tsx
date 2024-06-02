import { ReactNode } from 'react';
import { STAT } from './stats';
import * as Skills from './skills';

export interface Item {
  weight?: number;
  value?: number;
  uses?: number;
  name?: string;
  description?: string;
  skills?: number[];
  tags?: string[];
  defense?: number;
  damageDie?: number;
  variants?: string[];
  bonus?: Skills.Bonus;
}

export const TAGS = {
  POOR: 'Poor',
  PROSPEROUS: 'Prosperous',
  ARTIFACT: 'Artifact',
  EXPERIENCE: 'Experience',
  COMFORTABLE: 'Comfortable',
  APOTHECARY: 'Apothecary',
  MAGIC_SHOP: 'Magic shop',
  RANGED: 'Ranged',
  WEAPON: 'Weapon',
  BODY_ARMOR: 'Body armor',
  SHIELD: 'Shield',
  HEADGEAR: 'Headgear',
  POTION: 'Potion',
  POISON: 'Poison',
};

export const ITEMS: Item[] = [
  { name: 'Coins' },
  {
    value: 20,
    variants: ['Shortsword', 'Mace', 'Battleaxe'],
    damageDie: 6,
    weight: 2,
    tags: [TAGS.COMFORTABLE, TAGS.WEAPON],
  },
  {
    value: 2,
    name: 'Wooden Shield',
    defense: 1,
    weight: 2,
    tags: [TAGS.COMFORTABLE, TAGS.SHIELD],
  },
  {
    value: 5,
    name: 'Grappling Hook',
    tags: [TAGS.COMFORTABLE],
  },
  {
    value: 2,
    name: 'Lockpicking Kit',
    uses: 1,
    description: 'requires an appropriate skill to use',
    tags: [TAGS.COMFORTABLE],
  },
  {
    value: 3,
    variants: ['Longbow', 'Heavy Crossbow'],
    damageDie: 6,
    weight: 1,
    tags: [TAGS.RANGED, TAGS.COMFORTABLE, TAGS.WEAPON],
  },
  {
    value: 3,
    name: 'Throwing Knives',
    damageDie: 4,
    weight: 1,
    tags: [TAGS.RANGED, TAGS.COMFORTABLE, TAGS.WEAPON],
  },
  {
    value: 50,
    variants: ['Leather Armor', 'Chain Armor'],
    defense: 1,
    weight: 3,
    tags: [TAGS.COMFORTABLE, TAGS.BODY_ARMOR],
  },
  {
    value: 20,
    name: 'Iron Helmet',
    defense: 1,
    weight: 1,
    tags: [TAGS.COMFORTABLE, TAGS.HEADGEAR],
  },
  {
    value: 10,
    name: 'Silver Ring',
    tags: [TAGS.COMFORTABLE],
  },
  {
    value: 10,
    name: 'Antipoison',
    uses: 1,
    description: 'heals mundane poisons',
    tags: [TAGS.COMFORTABLE],
  },
  {
    value: 2,
    name: 'Wine',
    tags: [TAGS.COMFORTABLE],
  },
  {
    value: 10,
    name: 'Trap Components',
    uses: 1,
    weight: 1,
    tags: [TAGS.COMFORTABLE],
  },
  {
    value: 100,
    variants: ['Morningstar', 'Zweihander', 'Greataxe'],
    damageDie: 8,
    weight: 3,
    tags: [TAGS.WEAPON, TAGS.PROSPEROUS],
  },
  {
    value: 20,
    name: 'Distilled Spirits',
    tags: [TAGS.PROSPEROUS],
  },
  {
    value: 50,
    name: 'Silk Clothes',
    tags: [TAGS.BODY_ARMOR, TAGS.PROSPEROUS],
  },
  {
    value: 20,
    name: 'Gold Ring',
    tags: [TAGS.PROSPEROUS],
  },
  {
    value: 50,
    name: 'Textbook',
    weight: 1,
    description:
      'when obtaining a textbook, declare what subject the textbook is on',
    skills: [Skills.VERIFY_TEXTBOOK_ID],
    tags: [TAGS.PROSPEROUS],
  },

  {
    value: 5,
    name: 'Rations',
    uses: 5,
    weight: 1,
    tags: [TAGS.POOR],
  },
  {
    value: 1,
    name: 'Rope',
    weight: 1,
    description: 'per 10 meters',
    tags: [TAGS.POOR],
  },
  {
    value: 3,
    damageDie: 6,
    weight: 1,
    bonus: {
      bonusRoll: -2,
      tags: [Skills.TAGS.MELEE, Skills.TAGS.COMBAT],
      stats: [STAT.DEXTERITY],
    },
    variants: ['Hammers', 'Axes', 'Pickaxes'],
    tags: [TAGS.POOR],
  },
  {
    value: 3,
    name: 'Dagger',
    damageDie: 4,
    tags: [TAGS.POOR],
  },
  {
    value: 3,
    name: 'Shortbow',
    damageDie: 4,
    weight: 1,
    tags: [TAGS.RANGED, TAGS.POOR],
  },
  {
    value: 2,
    name: 'Bundle of Arrows',
    uses: 4,
    tags: [TAGS.POOR],
  },
  {
    value: 1,
    name: 'Torches',
    weight: 1,
    description: 'burns for 8 hours',
    tags: [TAGS.POOR],
  },
  {
    value: 1,
    name: 'Flint & Steel',
    tags: [TAGS.POOR],
  },
  {
    value: 2,
    name: 'Quiver',
    description: 'stores up to 16 arrows',
    tags: [TAGS.POOR],
  },
  {
    value: 2,
    name: 'Quarterstaff',
    damageDie: 4,
    tags: [TAGS.POOR],
  },
  {
    value: 3,
    name: 'Shovel',
    weight: 1,
    tags: [TAGS.POOR],
  },
  {
    value: 3,
    name: 'Shears',
    tags: [TAGS.POOR],
  },
  {
    value: 1,
    name: 'Bucket',
    tags: [TAGS.POOR],
  },
  {
    value: 2,
    name: 'Barrel',
    weight: 1,
    tags: [TAGS.POOR],
  },
  {
    value: 2,
    name: 'Tobacco',
    uses: 5,
    tags: [TAGS.POOR],
  },
  {
    value: 1,
    name: 'Beer',
    tags: [TAGS.POOR],
  },
  {
    value: 1,
    name: 'Net',
    weight: 1,
    tags: [TAGS.POOR],
  },
  {
    value: 1,
    name: 'Fishing Rod',
    weight: 1,
    tags: [TAGS.POOR],
  },
  {
    value: 2,
    name: 'Pipe',
    tags: [TAGS.POOR],
  },
  {
    value: 1,
    name: 'Needle',
    tags: [TAGS.POOR],
  },
  {
    value: 1,
    name: 'Thread',
    tags: [TAGS.POOR],
  },
  {
    value: 2,
    variants: ['Wool Clothes', 'Cotton Clothes'],
    tags: [TAGS.POOR],
  },
  {
    value: 1,
    name: 'Simple Holy Symbol',
    description: 'like wooden or iron necklaces',
    tags: [TAGS.POOR],
  },
  {
    value: 1,
    name: 'Holy Book',
    weight: 1,
    description:
      'this book behaves as a Textbook for its religion, as if you had rolled a 10+ on the subject check',
    tags: [TAGS.POOR],
  },
  {
    value: 3,
    name: 'Bandages',
    uses: 3,
    description:
      'heals 1d4 damage when a character takes a few minutes to apply it',
    tags: [TAGS.POOR],
  },
  {
    value: 5,
    name: 'Herbs and Poultices',
    uses: 5,
    description: 'heals 2d4 damage when applied to someone before sleeping',
    tags: [TAGS.POOR],
  },
  {
    value: 5,
    name: 'Chicken',
    weight: 1,
    description:
      'a chicken in a cage, can be slaughtered for 1 ration with 5 uses',
    tags: [TAGS.POOR],
  },
  {
    value: 16,
    name: 'Healing Potion',
    uses: 1,
    description:
      'instantly heals 3d4 health upon drinking, consuming a skill in combat',
    tags: [TAGS.POTION, TAGS.APOTHECARY],
  },
  {
    value: 16,
    name: 'Fortifying Serum',
    uses: 1,
    description: 'prevents the user from getting sick or poisoned for 1 day',
    tags: [TAGS.POTION, TAGS.APOTHECARY],
  },
  {
    value: 16,
    name: 'Antifire Solution',
    uses: 1,
    description:
      'prevents the user from being damaged by mundane source of fire for 1 day',
    tags: [TAGS.POTION, TAGS.APOTHECARY],
  },
  {
    value: 10,
    name: 'Sleep Oil',
    uses: 1,
    description:
      'when consumed orally, the person consuming it falls into a coma for 1 hour',
    tags: [TAGS.POTION, TAGS.APOTHECARY],
  },
  {
    value: 16,
    name: 'Nightshade Extract',
    uses: 1,
    description: 'when consumed orally, kills most users within 1 to 3 days',
    tags: [TAGS.POISON, TAGS.APOTHECARY],
  },
  {
    value: 12,
    name: 'Treefrog Dew',
    description:
      'weapons coated with this dew, on their first swing, inflict a poison that deals 1d4 damage per turn to the target',
    tags: [TAGS.POISON, TAGS.APOTHECARY],
  },
  {
    value: 1000,
    name: 'Orb of Scrying',
    description: 'when holding onto this orb, gain the Scry skill',
    skills: [Skills.SCRY_ID],
    tags: [TAGS.MAGIC_SHOP],
  },
  {
    value: 1200,
    name: 'Familiar’s Bell',
    description:
      'when holding onto this bell, gain the Summon Lesser Familiar skill',
    skills: [Skills.SUMMON_LESSER_FAMILIAR_ID],
    tags: [TAGS.MAGIC_SHOP],
  },
  {
    value: 800,
    name: 'Antifire Shield',
    description:
      'when taking a Defensive skill against magical or mundane fire, gain 1 advantage',
    weight: 2,
    tags: [TAGS.MAGIC_SHOP],
  },
  {
    value: 1600,
    name: 'Coral-encrusted Astrolabe',
    description:
      'when holding onto this astrolabe, gain the Contemplate Astrolabe skill',
    skills: [Skills.CONTEMPLATE_ASTROLABE_ID],
    tags: [TAGS.MAGIC_SHOP],
  },
  {
    value: 200,
    name: 'Cheaters Deck',
    description:
      'card games played with this item will always favor the deck’s owner',
    tags: [TAGS.MAGIC_SHOP],
  },
  {
    value: 1600,
    name: 'Sinner’s Puzzlebox',
    description:
      'when holding onto this puzzlebox, gain the Solve Puzzlebox skill',
    skills: [Skills.SOLVE_PUZZLEBOX_ID],
    tags: [TAGS.MAGIC_SHOP],
  },
  {
    value: 20,
    name: 'Crystal Ball',
    description: 'used by certain skills',
    tags: [TAGS.MAGIC_SHOP],
  },
  {
    value: 10,
    name: 'Trinket',
    description: 'small bits and bobs of historical relevance',
    tags: [TAGS.ARTIFACT],
  },
  {
    value: 100,
    name: 'Relic',
    weight: 1,
    description:
      'swords, scepters, crowns or other bits of clothing and finery',
    tags: [TAGS.ARTIFACT],
  },
  {
    value: 500,
    name: 'Large Relic',
    weight: 10,
    description:
      'large stone slabs, furniture, and other large and weighty bits of historical interest',
    tags: [TAGS.ARTIFACT],
  },
  {
    defense: 3,
    weight: 5,
    name: 'Platemail',
    tags: [TAGS.EXPERIENCE],
  },
  {
    damageDie: 6,
    bonus: {
      bonusDamage: 1,
      tags: [Skills.TAGS.MELEE, Skills.TAGS.COMBAT],
    },
    weight: 2,
    name: 'Knight’s Sword',
    tags: [TAGS.EXPERIENCE],
  },
  {
    name: 'Carpenter’s Badge',
    description:
      'When wearing this badge, when entering a settlement, you may ask the Storyteller if a Carpenter’s Hall exists in the settlement. They must answer truthfully.',
    tags: [TAGS.EXPERIENCE],
  },
];
