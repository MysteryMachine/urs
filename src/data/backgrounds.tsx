import { BackgroundExperience, CHOICE_REWARD_TYPE, REWARD_TYPE } from './bge-base';
import * as Items from './items';
import { STAT } from './stats';

export const COINS_ID = 0;
export const SHORTSWORD_ID = 1;
export const MACE_ID = 2;
export const SPEAR_ID = 3;
export const CHAINMAIL_ID = 4;
export const LEATHER_ARMOR_ID = 5;
export const COTTON_WOOL_CLOTHES_ID = 6;
export const WOODEN_SHIELD_ID = 7;
export const SHORTBOW_ID = 8;
export const ARROWS_ID = 9;
export const QUIVER_ID = 10;
export const STURDY_SKILL_ID = 11;
export const RATION_ID = 100;
export const DAGGER_ID = 104;
export const LOCKPICKING_KIT_ID = 108;
export const HANDAXE_PICKAXE_HAMMER_ID = 109;
export const DONKEY_ID = 110;
export const SCOUT_SKILL_ID = 200;
export const LOCKPICKING_SKILL_ID = 201;
export const HAGGLE_SKILL_ID = 202;
export const HOLY_BOOK_ID = 113; 
export const HOLY_SYMBOL_ID = 0;
export const BANDAGES_ID = 114;
export const BLESS_SKILL_ID = 205;
export const CLOTHES_ID = 115;
export const TOBACCO_ID = 116;
export const PIPE_ID = 117;
export const WINE_ID = 118;
export const HERBS_AND_POULTICES_ID = 119;
export const TEXTBOOK_ID = 120;
export const RECITE_SKILL_ID = 206;
export const COLLEGE_ID = 121;
export const TITLE_ID = 122;
export const SILK_CLOTHES_ID = 123;
export const DISTILLED_SPIRITS_ID = 124;
export const TITLE_OF_BARONS_CHILD_ID = 125;
export const HORSE_ID = 126;
export const COTTAGE_ID = 127;
export const SEDUCTIVE_SKILL_ID = 206;
export const QUARTERSTAFF_ID = 128;
export const SKULK_SKILL_ID = 207;

export type Background = BackgroundExperience;

const BACKGROUNDS: Background[] = [
  {
    name: 'Squire',
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
        id: COINS_ID,
        amount: 4,
      },
      {
        type: REWARD_TYPE.Item,
        id: SHORTSWORD_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: MACE_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: SPEAR_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: CHAINMAIL_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: LEATHER_ARMOR_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: COTTON_WOOL_CLOTHES_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: WOODEN_SHIELD_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: SHORTBOW_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: ARROWS_ID,
        amount: 4,
      },
      {
        type: REWARD_TYPE.Item,
        id: QUIVER_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Skill,
        id: STURDY_SKILL_ID,
      },
    ],
  },
  {
    name: 'Poacher',
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
        id: RATION_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: SHORTBOW_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: ARROWS_ID,
        amount: 4,
      },
      {
        type: REWARD_TYPE.Item,
        id: QUIVER_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: DAGGER_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: LEATHER_ARMOR_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: COTTON_WOOL_CLOTHES_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Skill,
        id: SCOUT_SKILL_ID,
      },
    ],
  },
  {
    name: 'Rascal',
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
        id: COINS_ID,
        amount: 4,
      },
      {
        type: REWARD_TYPE.Item,
        id: DAGGER_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: COTTON_WOOL_CLOTHES_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: LOCKPICKING_KIT_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Skill,
        id: LOCKPICKING_SKILL_ID,
      },
    ],
  },
  {
    name: 'Apprentice',
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
        id: COINS_ID,
        amount: 4,
      },
      {
        type: REWARD_TYPE.Item,
        id: HANDAXE_PICKAXE_HAMMER_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: COTTON_WOOL_CLOTHES_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Item,
        id: DONKEY_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Skill,
        id: HAGGLE_SKILL_ID,
      },
    ],
  },
  {
    name: 'Seminary',
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
        id: COINS_ID,
        amount: 4,
      },
      {
        type: CHOICE_REWARD_TYPE.OR,
        reward:
        [
        {
          type: REWARD_TYPE.Item,
          id: HOLY_BOOK_ID,
          amount: 1,
        },
        {
          type: REWARD_TYPE.Item,
          id: HOLY_SYMBOL_ID,
          amount: 1,
        },
      ]},
      {
        type: REWARD_TYPE.Item,
        id: BANDAGES_ID,
        amount: 1, 
      },
      {
        type: REWARD_TYPE.Item,
        id: COTTON_WOOL_CLOTHES_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Skill,
        id: BLESS_SKILL_ID,
      },
    ],
  },
  {
  name: "Scholar",
  description: "Your noble parents had you under the tutelage of an esteemed scholar. You grew erudite. You began your adventure with a book, and some herbal samples you had been studying. You have the ability to impart a great deal of knowledge to colleagues willing to listen.",
  reward: [
    {
      type: REWARD_TYPE.Stat,
      stat: STAT.INTELLIGENCE,
      amount: 2
    },
    {
      type: REWARD_TYPE.Item,
      id: COINS_ID,
      amount: 10
    },
    {
      type: REWARD_TYPE.Item,
      id: CLOTHES_ID,
      amount: 1
    },
    {
      type: REWARD_TYPE.Item,
      id: DAGGER_ID,
      amount: 1
    },
    {
      type: CHOICE_REWARD_TYPE.OR, reward:
      [
        {type: CHOICE_REWARD_TYPE.AND, reward: [{
          type: REWARD_TYPE.Item,
          id: TOBACCO_ID,
          amount: 1
        },
        {
          type: REWARD_TYPE.Item,
          id: PIPE_ID,
          amount: 1
        }]},
        {
          type: REWARD_TYPE.Item,
          id: WINE_ID,
          amount: 1
        }
      ],
    },
    {
      type: REWARD_TYPE.Item,
      id: HERBS_AND_POULTICES_ID,
      amount: 1
    },
    {
      type: REWARD_TYPE.Item,
      id: TEXTBOOK_ID,
      amount: 1
    },
    {
      type: REWARD_TYPE.Skill,
      id: RECITE_SKILL_ID
    },
    {
      type: REWARD_TYPE.Property,
      id: COLLEGE_ID,
    },
    {
      type: REWARD_TYPE.Property,
      id: TITLE_ID,
      additionalInfo: 'representing a title of scholar'
    }
  ]
}
{
  name: "Socialite",
  description: "You lived in the lap of luxury, spending most of your childhood carousing in balls and other luxurious events. You became very good at navigating social situations. You began your adventure with your favorite horse, money, and some of your favorite vices. Your ability to arouse and carouse allows you to persuade others more easily.",
  reward: [
    {
      type: REWARD_TYPE.Stat,
      stat: STAT.CHARISMA,
      amount: 2
    },
    {
      type: REWARD_TYPE.Item,
      id: COINS_ID,
      amount: 100
    },
    {
      type: REWARD_TYPE.Item,
      id: SILK_CLOTHES_ID,
      amount: 1
    },
    {
      type: CHOICE_REWARD_TYPE.OR, 
      reward: [
        {
          type: CHOICE_REWARD_TYPE.AND, 
          reward: [
            {
              type: REWARD_TYPE.Item,
              id: TOBACCO_ID,
              amount: 1
            },
            {
              type: REWARD_TYPE.Item,
              id: PIPE_ID,
              amount: 1
            }
          ]
        },
        {
          type: REWARD_TYPE.Item,
          id: DISTILLED_SPIRITS_ID,
          amount: 1
        }
      ]
    },
    {
      type: REWARD_TYPE.Property,
      id: TITLE_ID
    },
    {
      type: CHOICE_REWARD_TYPE.OR,
      reward: [
        {
          type: REWARD_TYPE.Item,
          id: HORSE_ID,
          amount: 1
        },
        {
          type: REWARD_TYPE.Property,
          id: COTTAGE_ID
        }
      ]
    },
    {
      type: REWARD_TYPE.Skill,
      id: SEDUCTIVE_SKILL_ID
    }
  ]
}, {
  name: "Star-Cursed",
  description: "You were a sick, unwanted child, born under an unlucky star. The seemingly supernatural disease sapped your body, leaving you frail and weak. You started your adventure upon the discovery of a magical artifact in the rubble of a local ruin.",
  reward: [
    {
      type: REWARD_TYPE.Stat,
      stat: STAT.CONSTITUTION,
      amount: -1
    },
    {
      type: REWARD_TYPE.Stat,
      stat: STAT.WILLPOWER,
      amount: 1
    },
    {
      type: REWARD_TYPE.Item,
      id: QUARTERSTAFF_ID,
      amount: 1
    },
    {
      type: REWARD_TYPE.Item,
      id: COTTON_WOOL_CLOTHES_ID,
      amount: 1
    },
    {
      type: REWARD_TYPE.Item,
      id: BANDAGES_ID,
      amount: 1,
    },
    {
      type: REWARD_TYPE.Item,
      amount: 1,
      tags: [Items.TAGS.MAGIC_SHOP]
    },
    {
      type: REWARD_TYPE.Skill,
      id: SKULK_SKILL_ID
    }
  ]
}

];
