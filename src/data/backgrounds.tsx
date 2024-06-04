import {
  BackgroundExperience,
  CHOICE_REWARD_TYPE,
  REWARD_TYPE,
} from './bge-base';
import * as Items from './items';
import * as Skills from './skills';
import * as Properties from './properties';
import { STAT } from './stats';

export type Background = BackgroundExperience;

const SQUIRE_ID = 'SQUIRE_ID'
const POACHER_ID = 'POACHER_ID'
const RASCAL_ID = 'RASCAL_ID'
const APPRENTICE_ID = 'APPRENTICE_ID'
const SEMINARY_ID = 'SEMINARY_ID'
const SCHOLAR_ID = 'SCHOLAR_ID'
const SOCIALITE_ID = 'SOCIALITE_ID'
const STAR_CURSED_ID = 'STAR_CURSED_ID'

export const BACKGROUNDS: Record<string, Background> = {
  [SQUIRE_ID]: {
    name: 'Squire',
    sortNum: 0,
    description:
      'You trained under a warrior for most of your childhood. This built up your body, and gave you a taste of the basics of combat. You began your adventure well equipped, with a good weapon, some armor, and some supporting items.',
    reward: [
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.STRENGTH,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.DEXTERITY,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.CONSTITUTION,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.COINS_ID,
        amount: 4,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.SMALL_WEAPON_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.CHAINMAIL_LEATHER_ARMOR_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.COTTON_WOOL_CLOTHES_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.OR,
        rewards: [
          {
            type: REWARD_TYPE.Item,
            id: Items.WOODEN_SHIELD_ID,
            amount: 1,
          },
          {
            type: REWARD_TYPE.AND,
            rewards: [
              {
                type: REWARD_TYPE.Item,
                id: Items.SHORTBOW_ID,
                amount: 1,
              },
              {
                type: REWARD_TYPE.Item,
                id: Items.ARROWS_ID,
                amount: 4,
              },
              {
                type: REWARD_TYPE.Item,
                id: Items.QUIVER_ID,
                amount: 1,
              },
            ],
          },
        ],
      },
      {
        type: REWARD_TYPE.Skill,
        id: Skills.STURDY_SKILL_ID,
      },
    ],
  },
  [POACHER_ID]: {
  name: 'Poacher',
      sortNum: 1,
    description:
      'You and your family lived in a cabin, where you poached animals for food. Your body is well suited for combat, and your eyes are sharp. You began your adventure with the tools of the trade, and the skills to survey the land.',
    reward: [
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.STRENGTH,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.DEXTERITY,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.WILLPOWER,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.RATION_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.SHORTBOW_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.ARROWS_ID,
        amount: 4,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.QUIVER_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.DAGGER_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.CHAINMAIL_LEATHER_ARMOR_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.COTTON_WOOL_CLOTHES_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Skill,
        id: Skills.SCOUT_SKILL_ID,
      },
    ],
  },
  [RASCAL_ID]: {
    name: 'Rascal',
    sortNum: 3,
    description:
      'You had to live on the streets, stealing to make ends meet. This made your hands fast, eyes sharp, and your body tough as nails. You began your adventure with the skills and tools to infiltrate places you weren’t supposed to be in.',
    reward: [
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.DEXTERITY,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.CONSTITUTION,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.WILLPOWER,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.COINS_ID,
        amount: 4,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.DAGGER_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.COTTON_WOOL_CLOTHES_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.LOCKPICKING_KIT_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Skill,
        id: Skills.LOCKPICKING_SKILL_ID,
      },
    ],
  },
  [APPRENTICE_ID]: {
    name: 'Apprentice',
    sortNum: 4,
    description:
      'You apprenticed at a local tradesman’s shop where you gained a knack for business. You grew smart, tough, and good at dealing with people. You began your adventure with your trusty donkey, and your favorite tool from the shop, as well as the ability to capitalize on a good bargain.',
    reward: [
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.INTELLIGENCE,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.CONSTITUTION,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.CHARISMA,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.COINS_ID,
        amount: 4,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.HANDAXE_PICKAXE_HAMMER_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.COTTON_WOOL_CLOTHES_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Properties.DONKEY_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Skill,
        id: Skills.HAGGLE_SKILL_ID,
      },
    ],
  },
  [SEMINARY_ID]: {
    name: 'Seminary',
    sortNum: 5,
    description:
      'You attended a seminary for most of your childhood where you learned much about religion, and the rites of your god. This made you sharp and perceptive, and the good food made you sturdy. You began your adventure with the garbs of a priest, as well as the ability to endow others with your god’s favor.',
    reward: [
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.INTELLIGENCE,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.WILLPOWER,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.CONSTITUTION,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.COINS_ID,
        amount: 4,
      },
      {
        type: REWARD_TYPE.OR,
        rewards: [
          {
            type: REWARD_TYPE.Item,
            id: Items.HOLY_BOOK_ID,
            amount: 1,
          },
          {
            type: REWARD_TYPE.Item,
            id: Items.HOLY_SYMBOL_ID,
            amount: 1,
          },
        ],
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.BANDAGES_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.COTTON_WOOL_CLOTHES_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Skill,
        id: Skills.BLESS_SKILL_ID,
      },
    ],
  },
  [SCHOLAR_ID]: {
    name: 'Scholar',
    sortNum: 6,
    description:
      'Your noble parents had you under the tutelage of an esteemed scholar. You grew erudite. You began your adventure with a book, and some herbal samples you had been studying. You have the ability to impart a great deal of knowledge to colleagues willing to listen.',
    reward: [
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.INTELLIGENCE,
        amount: 2,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.COINS_ID,
        amount: 10,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.COTTON_WOOL_CLOTHES_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.DAGGER_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.OR,
        rewards: [
          {
            type: REWARD_TYPE.AND,
            rewards: [
              {
                type: REWARD_TYPE.Item,
                id: Items.TOBACCO_ID,
                amount: 1,
              },
              {
                type: REWARD_TYPE.Item,
                id: Items.PIPE_ID,
                amount: 1,
              },
            ],
          },
          {
            type: REWARD_TYPE.Item,
            id: Items.WINE_ID,
            amount: 1,
          },
        ],
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.HERBS_AND_POULTICES_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.TEXTBOOK_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Skill,
        id: Skills.RECITE_SKILL_ID,
      },
      // {
      //   type: REWARD_TYPE.Property,
      //   id: COLLEGE_ID,
      // },
      {
        type: REWARD_TYPE.Property,
        id: Properties.TITLE_ID,
        additionalInfo: 'representing a title of scholar',
      },
    ],
  },
  [SOCIALITE_ID]: {
    name: 'Socialite',
    sortNum: 7,
    description:
      'You lived in the lap of luxury, spending most of your childhood carousing in balls and other luxurious events. You became very good at navigating social situations. You began your adventure with your favorite horse, money, and some of your favorite vices. Your ability to arouse and carouse allows you to persuade others more easily.',
    reward: [
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.CHARISMA,
        amount: 2,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.COINS_ID,
        amount: 100,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.SILK_CLOTHES_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.OR,
        rewards: [
          {
            type: REWARD_TYPE.AND,
            rewards: [
              {
                type: REWARD_TYPE.Item,
                id: Items.TOBACCO_ID,
                amount: 1,
              },
              {
                type: REWARD_TYPE.Item,
                id: Items.PIPE_ID,
                amount: 1,
              },
            ],
          },
          {
            type: REWARD_TYPE.Item,
            id: Items.DISTILLED_SPIRITS_ID,
            amount: 1,
          },
        ],
      },
      {
        type: REWARD_TYPE.Property,
        id: Properties.TITLE_ID,
      },
      {
        type: REWARD_TYPE.OR,
        rewards: [
          {
            type: REWARD_TYPE.Item,
            id: Properties.HORSE_ID,
            amount: 1,
          },
          {
            type: REWARD_TYPE.Property,
            id: Properties.COTTAGE_ID,
          },
        ],
      },
      {
        type: REWARD_TYPE.Skill,
        id: Skills.SEDUCTIVE_SKILL_ID,
      },
    ],
  },
  [STAR_CURSED_ID]: {
  name: 'Star-Cursed',
      sortNum: 100,
    description:
      'You were a sick, unwanted child, born under an unlucky star. The seemingly supernatural disease sapped your body, leaving you frail and weak. You started your adventure upon the discovery of a magical artifact in the rubble of a local ruin.',
    reward: [
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.CONSTITUTION,
        amount: -1,
      },
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.WILLPOWER,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.QUARTERSTAFF_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.COTTON_WOOL_CLOTHES_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.BANDAGES_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        amount: 1,
        tags: [Items.TAGS.MAGIC_SHOP],
      },
      {
        type: REWARD_TYPE.Skill,
        id: Skills.SKULK_SKILL_ID,
      },
    ],
  },
};

export const BACKGROUNDS_ARR : Background[] = Object.values(BACKGROUNDS).sort((a, b) => a.sortNum - b.sortNum)