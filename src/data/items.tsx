import { ReactNode } from 'react';
import { STAT } from './stats';
import * as Skills from './skills';

export interface Item {
  weight?: number;
  value?: number;
  uses?: number;
  name?: string;
  description?: string;
  skills?: string[];
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

export const ARROWS_ID = 'arrows';
export const BANDAGES_ID = 'bandages';
export const BOW_ID = 'bow';
export const CARPENTERS_BADGE_ID = 'carpentersbadge';
export const COINS_ID = 'coins';
export const COTTON_WOOL_CLOTHES_ID = 'cottonwoolclothes';
export const DAGGER_ID = 'dagger';
export const DISTILLED_SPIRITS_ID = 'distilledspirits';
export const HANDAXE_PICKAXE_HAMMER_ID = 'HANDAXE_PICKAXE_HAMMER_ID';
export const HERBS_AND_POULTICES_ID = 'herbs and poltices';
export const HOLY_BOOK_ID = 'holybook';
export const HOLY_SYMBOL_ID = 'holysymbole';
export const HORSE_ID = 'horse';
export const KNIGHTS_SWORD_ID = 'knightssword';
export const CHAINMAIL_LEATHER_ARMOR_ID = 'leatherorchainmail';
export const LOCKPICKING_KIT_ID = 'lockpickingkitid';
export const PIPE_ID = 'pipeid';
export const PLATEMAIL_ID = 'platemail';
export const QUARTERSTAFF_ID = 'quarterstaff-id';
export const QUIVER_ID = 'quiver';
export const RATION_ID = 'ratio';
export const SHORTBOW_ID = 'shortbow';
export const SILK_CLOTHES_ID = 'silkclothes';
export const SMALL_WEAPON_ID = 'smallweap';
export const TEXTBOOK_ID = 'textbok';
export const TOBACCO_ID = 'tobacco';
export const TRAP_COMPONENTS_ID = 'trapcomponents';
export const WINE_ID = 'wine';
export const WOODEN_SHIELD_ID = 'woodenshield';
export const GRAPPLING_HOOK_ID = 'grapplinghook';
export const BOW_OR_CROSSBOW_ID = 'longboworcrossbow';
export const THROWING_KNIVES_ID = 'throwingknives';
export const IRON_HELMET_ID = 'ironhelmet';
export const SILVER_RING_ID = 'silverringid';
export const BUCKET_ID = 'bucket';
export const SHOVEL_ID = 'shovel';
export const ROPE_ID = 'rope';
export const NET_ID = 'net';
export const BEER_ID = 'beer';
export const NEEDLE_ID = 'needle';
export const THREAD_ID = 'thread';
export const FISHING_ROD_ID = 'fishingrod';
export const SHEARS_ID = 'shears';
export const BARREL_ID = 'barrel';
export const TORCH_ID = 'torch';
export const ANTIPOISON_ID = 'antipoison';
export const HEAVY_WEAPON_ID = 'heavyweapon';
export const GOLD_RING_ID = 'goldring';
export const FLINT_AND_STEEL_ID = 'flintsandsteel';
export const SLEEP_OIL_ID = 'sleepoil';
export const CRYSTAL_BALL_ID = 'crystalball';
export const RELIC_ID = 'relic';
export const TRINKET_ID = 'trinket';
export const SCRYING_ORB_ID = 'scryingorb';
export const LARGE_RELIC_ID = 'largerelic';
export const ASTROLABE_ID = 'astrolabe';
export const CHEATERS_DECK_ID = 'cheatersdeck';
export const SINNERS_PUZZLEBOX_ID = 'sinnerspuzzlebox';
export const FAMILIARS_BELL_ID = 'familiarsbell';
export const ANTIFIRE_SHIELD_ID = 'antifireshield';
export const HEALING_POTION_ID = 'healingpotion';
export const TREEFROG_DEW_ID = 'treefrogdew';
export const NIGHTSHADE_EXTRACT_ID = 'nightshadeextract';
export const ANTIFIRE_SOLUTION_ID = 'antifiresolution';
export const FORTIFYING_SERUM_ID = 'fortifyingserum';

const TagOrder = {
  [TAGS.COMFORTABLE]: 1,
  [TAGS.PROSPEROUS]: 2,
  [TAGS.POOR]: 0,
  [TAGS.MAGIC_SHOP]: 5,
  [TAGS.APOTHECARY]: 4,
  [TAGS.ARTIFACT]: 6,
  [TAGS.EXPERIENCE]: 7,
};

export const ITEMS: Record<string, Item> = {
  [COINS_ID]: { name: 'Coin', description: 'basic currency' },
  [SMALL_WEAPON_ID]: {
    value: 20,
    variants: ['Shortsword', 'Mace', 'Spear'],
    damageDie: 6,
    weight: 2,
    tags: [TAGS.COMFORTABLE, TAGS.WEAPON],
  },
  [WOODEN_SHIELD_ID]: {
    value: 2,
    name: 'Wooden Shield',
    defense: 1,
    weight: 2,
    tags: [TAGS.COMFORTABLE, TAGS.SHIELD],
  },
  [GRAPPLING_HOOK_ID]: {
    value: 5,
    name: 'Grappling Hook',
    tags: [TAGS.COMFORTABLE],
  },
  [LOCKPICKING_KIT_ID]: {
    value: 2,
    name: 'Lockpicking Kit',
    uses: 1,
    description: 'requires an appropriate skill to use',
    tags: [TAGS.COMFORTABLE],
  },
  [BOW_OR_CROSSBOW_ID]: {
    value: 3,
    variants: ['Longbow', 'Heavy Crossbow'],
    damageDie: 6,
    weight: 1,
    tags: [TAGS.RANGED, TAGS.COMFORTABLE, TAGS.WEAPON],
  },
  [THROWING_KNIVES_ID]: {
    value: 3,
    name: 'Throwing Knives',
    damageDie: 4,
    weight: 1,
    tags: [TAGS.RANGED, TAGS.COMFORTABLE, TAGS.WEAPON],
  },
  [CHAINMAIL_LEATHER_ARMOR_ID]: {
    value: 50,
    variants: ['Leather Armor', 'Chainmail'],
    defense: 1,
    weight: 3,
    tags: [TAGS.COMFORTABLE, TAGS.BODY_ARMOR],
  },
  [IRON_HELMET_ID]: {
    value: 20,
    name: 'Iron Helmet',
    defense: 1,
    weight: 1,
    tags: [TAGS.COMFORTABLE, TAGS.HEADGEAR],
  },
  [SILVER_RING_ID]: {
    value: 10,
    name: 'Silver Ring',
    tags: [TAGS.COMFORTABLE],
  },
  [ANTIPOISON_ID]: {
    value: 10,
    name: 'Antipoison',
    uses: 1,
    description: 'heals mundane poisons',
    tags: [TAGS.COMFORTABLE],
  },
  [WINE_ID]: {
    value: 2,
    name: 'Wine',
    tags: [TAGS.COMFORTABLE],
  },
  [TRAP_COMPONENTS_ID]: {
    value: 10,
    name: 'Trap Components',
    uses: 1,
    weight: 1,
    tags: [TAGS.COMFORTABLE],
  },
  [HEAVY_WEAPON_ID]: {
    value: 100,
    variants: ['Morningstar', 'Zweihander', 'Greataxe'],
    damageDie: 8,
    weight: 3,
    tags: [TAGS.WEAPON, TAGS.PROSPEROUS],
  },
  [DISTILLED_SPIRITS_ID]: {
    value: 20,
    name: 'Distilled Spirits',
    tags: [TAGS.PROSPEROUS],
  },
  [SILK_CLOTHES_ID]: {
    value: 50,
    name: 'Silk Clothes',
    tags: [TAGS.BODY_ARMOR, TAGS.PROSPEROUS],
  },
  [GOLD_RING_ID]: {
    value: 20,
    name: 'Gold Ring',
    tags: [TAGS.PROSPEROUS],
  },
  [TEXTBOOK_ID]: {
    value: 50,
    name: 'Textbook',
    weight: 1,
    description:
      'when obtaining a textbook, declare what subject the textbook is on',
    skills: [Skills.VERIFY_TEXTBOOK_SKILL_ID],
    tags: [TAGS.PROSPEROUS],
  },

  [RATION_ID]: {
    value: 5,
    name: 'Rations',
    uses: 5,
    weight: 1,
    tags: [TAGS.POOR],
  },
  [ROPE_ID]: {
    value: 1,
    name: 'Rope',
    weight: 1,
    description: 'per 10 meters',
    tags: [TAGS.POOR],
  },
  [HANDAXE_PICKAXE_HAMMER_ID]: {
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
  [DAGGER_ID]: {
    value: 3,
    name: 'Dagger',
    damageDie: 4,
    tags: [TAGS.POOR],
  },
  [SHORTBOW_ID]: {
    value: 3,
    name: 'Shortbow',
    damageDie: 4,
    weight: 1,
    tags: [TAGS.RANGED, TAGS.POOR],
  },
  [ARROWS_ID]: {
    value: 2,
    name: 'Bundle of Arrows',
    uses: 4,
    tags: [TAGS.POOR],
  },
  [TORCH_ID]: {
    value: 1,
    name: 'Torch',
    weight: 1,
    description: 'burns for 8 hours',
    tags: [TAGS.POOR],
  },
  [FLINT_AND_STEEL_ID]: {
    value: 1,
    name: 'Flint & Steel',
    tags: [TAGS.POOR],
  },
  [QUIVER_ID]: {
    value: 2,
    name: 'Quiver',
    description: 'stores up to 16 arrows',
    tags: [TAGS.POOR],
  },
  [QUARTERSTAFF_ID]: {
    value: 2,
    name: 'Quarterstaff',
    damageDie: 4,
    tags: [TAGS.POOR],
  },
  [SHOVEL_ID]: {
    value: 3,
    name: 'Shovel',
    weight: 1,
    tags: [TAGS.POOR],
  },
  [SHEARS_ID]: {
    value: 3,
    name: 'Shears',
    tags: [TAGS.POOR],
  },
  [BUCKET_ID]: {
    value: 1,
    name: 'Bucket',
    tags: [TAGS.POOR],
  },
  [BARREL_ID]: {
    value: 2,
    name: 'Barrel',
    weight: 1,
    tags: [TAGS.POOR],
  },
  [TOBACCO_ID]: {
    value: 2,
    name: 'Tobacco',
    uses: 5,
    tags: [TAGS.POOR],
  },
  [BEER_ID]: {
    value: 1,
    name: 'Beer',
    tags: [TAGS.POOR],
  },
  [NET_ID]: {
    value: 1,
    name: 'Net',
    weight: 1,
    tags: [TAGS.POOR],
  },
  [FISHING_ROD_ID]: {
    value: 1,
    name: 'Fishing Rod',
    weight: 1,
    tags: [TAGS.POOR],
  },
  [PIPE_ID]: {
    value: 2,
    name: 'Pipe',
    tags: [TAGS.POOR],
  },
  [NEEDLE_ID]: {
    value: 1,
    name: 'Needle',
    tags: [TAGS.POOR],
  },
  [THREAD_ID]: {
    value: 1,
    name: 'Thread',
    tags: [TAGS.POOR],
  },
  [COTTON_WOOL_CLOTHES_ID]: {
    value: 2,
    variants: ['Wool Clothes', 'Cotton Clothes'],
    tags: [TAGS.POOR],
  },
  [HOLY_SYMBOL_ID]: {
    value: 1,
    name: 'Simple Holy Symbol',
    description: 'like wooden or iron necklaces',
    tags: [TAGS.POOR],
  },
  [HOLY_BOOK_ID]: {
    value: 1,
    name: 'Holy Book',
    weight: 1,
    description:
      'this book behaves as a Textbook for its religion, as if you had rolled a 10+ on the subject check',
    tags: [TAGS.POOR],
  },
  [BANDAGES_ID]: {
    value: 3,
    name: 'Bandages',
    uses: 3,
    description:
      'heals 1d4 damage when a character takes a few minutes to apply it',
    tags: [TAGS.POOR],
  },
  [HERBS_AND_POULTICES_ID]: {
    value: 5,
    name: 'Herbs and Poultices',
    uses: 5,
    description: 'heals 2d4 damage when applied to someone before sleeping',
    tags: [TAGS.POOR],
  },
  [HEALING_POTION_ID]: {
    value: 16,
    name: 'Healing Potion',
    uses: 1,
    description:
      'instantly heals 3d4 health upon drinking, consuming a skill in combat',
    tags: [TAGS.POTION, TAGS.APOTHECARY],
  },
  [FORTIFYING_SERUM_ID]: {
    value: 16,
    name: 'Fortifying Serum',
    uses: 1,
    description: 'prevents the user from getting sick or poisoned for 1 day',
    tags: [TAGS.POTION, TAGS.APOTHECARY],
  },
  [ANTIFIRE_SOLUTION_ID]: {
    value: 16,
    name: 'Antifire Solution',
    uses: 1,
    description:
      'prevents the user from being damaged by mundane source of fire for 1 day',
    tags: [TAGS.POTION, TAGS.APOTHECARY],
  },
  [SLEEP_OIL_ID]: {
    value: 10,
    name: 'Sleep Oil',
    uses: 1,
    description:
      'when consumed orally, the person consuming it falls into a coma for 1 hour',
    tags: [TAGS.POTION, TAGS.APOTHECARY],
  },
  [NIGHTSHADE_EXTRACT_ID]: {
    value: 16,
    name: 'Nightshade Extract',
    uses: 1,
    description: 'when consumed orally, kills most users within 1 to 3 days',
    tags: [TAGS.POISON, TAGS.APOTHECARY],
  },
  [TREEFROG_DEW_ID]: {
    value: 12,
    name: 'Treefrog Dew',
    description:
      'weapons coated with this dew, on their first swing, inflict a poison that deals 1d4 damage per turn to the target',
    tags: [TAGS.POISON, TAGS.APOTHECARY],
  },
  [ANTIFIRE_SHIELD_ID]: {
    value: 800,
    name: 'Antifire Shield',
    description:
      'when taking a Defensive skill against magical or mundane fire, gain 1 advantage',
    weight: 2,
    tags: [TAGS.MAGIC_SHOP],
  },
  [CHEATERS_DECK_ID]: {
    value: 200,
    name: 'Cheaters Deck',
    description:
      'card games played with this item will always favor the deck’s owner',
    tags: [TAGS.MAGIC_SHOP],
  },
  [CRYSTAL_BALL_ID]: {
    value: 20,
    name: 'Crystal Ball',
    description: 'used by certain skills',
    tags: [TAGS.MAGIC_SHOP],
  },
  [TRINKET_ID]: {
    value: 10,
    name: 'Trinket',
    description: 'small bits and bobs of historical relevance',
    tags: [TAGS.ARTIFACT],
  },
  [RELIC_ID]: {
    value: 100,
    name: 'Relic',
    weight: 1,
    description:
      'swords, scepters, crowns or other bits of clothing and finery',
    tags: [TAGS.ARTIFACT],
  },
  [LARGE_RELIC_ID]: {
    value: 500,
    name: 'Large Relic',
    weight: 10,
    description:
      'large stone slabs, furniture, and other large and weighty bits of historical interest',
    tags: [TAGS.ARTIFACT],
  },
  [PLATEMAIL_ID]: {
    defense: 3,
    weight: 5,
    name: 'Platemail',
    tags: [TAGS.EXPERIENCE],
  },
  [KNIGHTS_SWORD_ID]: {
    damageDie: 6,
    bonus: {
      bonusDamage: 1,
      tags: [Skills.TAGS.MELEE, Skills.TAGS.COMBAT],
    },
    weight: 2,
    name: 'Knight’s Sword',
    tags: [TAGS.EXPERIENCE],
  },
  [CARPENTERS_BADGE_ID]: {
    name: 'Carpenter’s Badge',
    description:
      'When wearing this badge, when entering a settlement, you may ask the Storyteller if a Carpenter’s Hall exists in the settlement. They must answer truthfully.',
    tags: [TAGS.EXPERIENCE],
  },
  [SCRYING_ORB_ID]: {
    value: 1000,
    name: 'Orb of Scrying',
    description: 'when holding onto this orb, gain the Scry skill',
    skills: [Skills.SCRY_SKILL_ID],
    tags: [TAGS.MAGIC_SHOP],
  },
  [FAMILIARS_BELL_ID]: {
    value: 1200,
    name: 'Familiar’s Bell',
    description:
      'when holding onto this bell, gain the Summon Lesser Familiar skill',
    skills: [Skills.SUMMON_LESSER_FAMILIAR_SKILL_ID],
    tags: [TAGS.MAGIC_SHOP],
  },

  [ASTROLABE_ID]: {
    value: 1600,
    name: 'Coral-encrusted Astrolabe',
    description:
      'when holding onto this astrolabe, gain the Contemplate Astrolabe skill',
    skills: [Skills.CONTEMPLATE_ASTROLABE_SKILL_ID],
    tags: [TAGS.MAGIC_SHOP],
  },
  [SINNERS_PUZZLEBOX_ID]: {
    value: 1600,
    name: 'Sinner’s Puzzlebox',
    description:
      'when holding onto this puzzlebox, gain the Solve Puzzlebox skill',
    skills: [Skills.SOLVE_PUZZLEBOX_SKILL_ID],
    tags: [TAGS.MAGIC_SHOP],
  },
};

export const ITEMS_ARR: Item[] = Object.values(ITEMS).sort((a, b) => {
  return (
    (a.tags ? a.tags.map((i) => TagOrder[i] || -1).sort()[-1] : -1) -
    (b.tags ? b.tags.map((i) => TagOrder[i] || -1).sort()[-1] : -1)
  );
});
