import {
  BackgroundExperience,
  CHOICE_REWARD_TYPE,
  REWARD_TYPE,
} from './bge-base';
import { STAT } from './stats';
import * as Items from './items';
import * as Skills from './skills';
import * as Properties from './properties';
import * as Services from './services'

export enum REQUIREMENT_TYPE {
  ITEM,
  STAT,
  SKILL,
  OTHER,
}

export interface RequirementBase {
  type: REQUIREMENT_TYPE;
}

export interface ItemRequirement extends RequirementBase {
  type: REQUIREMENT_TYPE.ITEM;
  amount: number;
  id: number | undefined;
}

export interface StatRequirement extends RequirementBase {
  type: REQUIREMENT_TYPE.STAT;
  stat: STAT;
  amount: number;
}

export interface SkillRequirement extends RequirementBase {
  type: REQUIREMENT_TYPE.SKILL;
  id: number | undefined;
}

export interface OtherRequirement extends RequirementBase {
  type: REQUIREMENT_TYPE.OTHER;
  description: string;
}

export type Requirement =
  | ItemRequirement
  | StatRequirement
  | SkillRequirement
  | OtherRequirement;

export interface Experience extends BackgroundExperience {
  requires: Requirement[];
}

export const TAGS = {
  BASIC: 'Basic',
  MUNDANE: 'Mundane',
  NEAR_DEATH: 'Near death',
  SUPERNATURAL: 'Supernatural',
};

export const EXPERIENCES: Experience[] = [
  {
    name: 'Engineer’s Apprentice',
    description:
      'Your analytical mind and sharp fingers make you a good candidate for an apprenticeship at a local engineer’s shop. You make a living for a month assisting them. This deepens your knowledge of mechanics and engineering. You think you can apply some of this on your adventures.',
    tags: [TAGS.BASIC],
    reward: [
      {
        type: REWARD_TYPE.Item,
        id: Items.COINS_ID,
        amount: 14,
        condition: 'Taken in a settlement of at least Large size',
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.TRAP_COMPONENTS_ID,
        amount: 1,
      },
      {
        type: CHOICE_REWARD_TYPE.OR,
        reward: [
          {
            type: REWARD_TYPE.Skill,
            id: Skills.SEARCH_FOR_TRAPS_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.DISARM_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.SET_TRAP_SKILL_ID,
          },
        ],
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.STAT,
        stat: STAT.INTELLIGENCE,
        amount: 0,
      },
      {
        type: REQUIREMENT_TYPE.STAT,
        stat: STAT.DEXTERITY,
        amount: 0,
      },
    ],
  },
  {
    name: 'City Guard',
    description:
      'Intent on keeping your combat skills, you make a living for a month as a city guard. You spend your time walking around, settling petty disputes, and occasionally you fight off a petty criminal. You find yourself in better physical condition, and with some improved social skills.',
    tags: [TAGS.BASIC],
    reward: [
      {
        type: REWARD_TYPE.Item,
        id: Items.COINS_ID,
        amount: 7,
        condition: 'Taken in a settlement of defenses of at least Guard',
      },
      {
        type: CHOICE_REWARD_TYPE.OR,
        reward: [
          {
            type: REWARD_TYPE.Skill,
            id: Skills.STURDY_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.SLUGGER_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.FORMATION_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.DETAINMENT_SKILL_ID,
          },
        ],
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.STAT,
        stat: STAT.STRENGTH,
        amount: 0,
      },
      {
        type: REQUIREMENT_TYPE.STAT,
        stat: STAT.CONSTITUTION,
        amount: 0,
      },
      {
        type: REQUIREMENT_TYPE.OTHER,
        description: 'Settlement of defenses of at least Guard',
      },
    ],
  },
  {
    name: 'Outlander',
    description:
      'Finding work in the city is not easy, and you think it better for you to take your chances hunting in the local wilderness. You live off the land for a month, poaching wild animals. You build up your knowledge of survival and navigation in this time.',
    tags: [TAGS.BASIC],
    reward: [
      {
        type: REWARD_TYPE.Item,
        id: Items.RATION_ID,
        amount: 1,
      },
      {
        type: CHOICE_REWARD_TYPE.OR,
        reward: [
          {
            type: REWARD_TYPE.Skill,
            id: Skills.SCOUT_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.TAKE_AIM_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.TRACK_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.PROWL_SKILL_ID,
          },
        ],
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.STAT,
        stat: STAT.CONSTITUTION,
        amount: 0,
      },
      {
        type: REQUIREMENT_TYPE.STAT,
        stat: STAT.WILLPOWER,
        amount: 0,
      },
      {
        type: REQUIREMENT_TYPE.ITEM,
        id: Items.BOW_ID,
        amount: 1,
      },
    ],
  },
  {
    name: 'Church Fellow',
    description:
      'Volunteering at the church is not glamorous, nor does it pay, but you found yourself housed and fed for a month. In this time, you aided the church in fundraising, caring for the sick, and with other menial tasks. You find yourself more knowledgeable about basic medical procedures, and in haggling around town.',
    tags: [TAGS.BASIC],
    reward: [
      {
        type: REWARD_TYPE.Item,
        id: Items.RATION_ID,
        amount: 1,
      },
      {
        type: CHOICE_REWARD_TYPE.OR,
        reward: [
          {
            type: REWARD_TYPE.Skill,
            id: Skills.SUTURE_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.FIELD_MEDICINE_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.MORAL_APPEAL_SKILL_ID,
          },
        ],
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.STAT,
        stat: STAT.CHARISMA,
        amount: 0,
      },
    ],
  },
  {
    name: 'Scam Artist',
    description:
      'Why work hard when there are so many marks about? As soon as the party split up, you sat yourself down at a bar, and got to work scamming drunks and dullards out of their coins. You became even more silver-tongued than before, and, dare you say, perhaps even more good looking.',
    tags: [TAGS.BASIC],
    reward: [
      {
        type: REWARD_TYPE.Item,
        id: Items.COINS_ID,
        amount: 10,
      },
      {
        type: CHOICE_REWARD_TYPE.OR,
        reward: [
          {
            type: REWARD_TYPE.Skill,
            id: Skills.PICKPOCKET_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.SEDUCTIVE_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.EYE_FOR_DECEIT_SKILL_ID,
          },
        ],
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.STAT,
        stat: STAT.CHARISMA,
        amount: 0,
      },
      {
        type: REQUIREMENT_TYPE.STAT,
        stat: STAT.INTELLIGENCE,
        amount: 0,
      },
    ],
  },
  {
    name: 'Pickpocket',
    description:
      'Working was never your thing, and you decided to lay low for the month, and enjoy the wealth that can be found right in people’s pockets. You even learned a few new tricks during your time off.',
    tags: [TAGS.BASIC],
    reward: [
      {
        type: REWARD_TYPE.Item,
        id: Items.COINS_ID,
        amount: 10,
      },
      {
        type: CHOICE_REWARD_TYPE.OR,
        reward: [
          {
            type: REWARD_TYPE.Skill,
            id: Skills.SKULK_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.PICKPOCKET_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.LOCKPICK_SKILL_ID,
          },
        ],
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.STAT,
        stat: STAT.WILLPOWER,
        amount: 0,
      },
      {
        type: REQUIREMENT_TYPE.STAT,
        stat: STAT.DEXTERITY,
        amount: 0,
      },
    ],
  },
  {
    name: 'Tutor',
    description:
      'The snotty child of some nobleman needed your tutelage. It didn’t pay much other than food and board, but you were able to sneak a textbook from their library as an additional recompense. At least you were able to get a little bit of extra studying in.',
    tags: [TAGS.BASIC],
    reward: [
      {
        type: REWARD_TYPE.Item,
        id: Items.COINS_ID,
        amount: 4,
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.TEXTBOOK_ID,
        amount: 1,
      },
      {
        type: CHOICE_REWARD_TYPE.OR,
        reward: [
          {
            type: REWARD_TYPE.Skill,
            id: Skills.CITE_SOURCES_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.BOTANY_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.CHEMISTRY_SKILL_ID,
          },
        ],
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.STAT,
        stat: STAT.INTELLIGENCE,
        amount: 0,
      },
    ],
  },
  {
    name: 'Menial Labor',
    description:
      'You’re a bit of a waste of skin, with not enough talent to do much of anything with your time. You gritted your teeth, and took a tiring job doing manual labor.',
    tags: [TAGS.BASIC],
    reward: [
      {
        type: REWARD_TYPE.Item,
        id: Items.COINS_ID,
        amount: 6,
      },
      {
        type: CHOICE_REWARD_TYPE.OR,
        reward: [
          {
            type: REWARD_TYPE.Skill,
            id: Skills.HAGGLE_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.STURDY_SKILL_ID,
          },
        ],
      },
    ],
    requires: [],
  },
  {
    name: 'Knighted',
    description:
      'Your deeds have earned you the title of Knight in this settlement. For your deeds, you’ve been granted a horse, a knight’s sword, and some other rewards.',
    tags: [TAGS.MUNDANE],
    reward: [
      {
        type: CHOICE_REWARD_TYPE.OR,
        reward: [
          {
            type: REWARD_TYPE.Item,
            id: Items.PLATEMAIL_ID,
            amount: 1,
          },
          {
            type: REWARD_TYPE.Property,
            id: Properties.COTTAGE_ID,
          },
        ],
      },
      {
        type: REWARD_TYPE.Item,
        id: Items.KNIGHTS_SWORD_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Property,
        id: Properties.HORSE_ID,
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.OTHER,
        description: 'Completing a quest for a Lord or King',
      },
    ],
  },
  {
    name: 'Gang Induction',
    description:
      'Word on the street has it that you’re reliable, and that you keep your mouth shut. A local gang of criminals inducts you into their ranks.',
    tags: [TAGS.MUNDANE],
    reward: [
      {
        type: REWARD_TYPE.Skill,
        id: Skills.FENCE_SKILL_ID,
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.OTHER,
        description: 'Completing a quest for a local criminal',
      },
    ],
  },
  {
    name: 'Carpenter’s Hall Induction',
    description:
      'You join a local Carpenter’s Hall, a place where the wealthy and powerful establish connections and build relationships. It is rumored that higher ranking Carpenters learn how to cast spells to cement their place in the world.',
    tags: [TAGS.MUNDANE],
    reward: [
      {
        type: REWARD_TYPE.Item,
        id: Items.CARPENTERS_BADGE_ID,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Skill,
        id: Skills.SEARCH_CONNECTIONS_SKILL_ID,
      },
      {
        type: REWARD_TYPE.Other,
        description: "Add a Carpenter's Hall to this Settlement"
      }
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.OTHER,
        description:
          'Being in a settlement of size Large or better. Paying 100 coins or having a title in the settlement you are using Reflect & Learn in.',
      },
    ],
  },
  {
    name: 'Establish a Retainer',
    description:
      'You leverage your influence in this settlement to generate some recurring income.',
    tags: [TAGS.MUNDANE],
    reward: [
      {
        type: REWARD_TYPE.Other,
        description: 'Gain a retainer commensurate to your title',
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.OTHER,
        description: 'A title in this settlement.',
      },
    ],
  },
  {
    name: 'Establish a Business',
    description:
      'You work to establish a business, gaining you recurring passive income.',
    tags: [TAGS.MUNDANE],
    reward: [
      {
        type: REWARD_TYPE.Other,
        description:
          'For each property you own in this settlement, gain a Retainer of size equal to <the cost of the property>/100.',
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.OTHER,
        description: 'Property in this settlement.',
      },
    ],
  },
  {
    name: 'Lecture Hall',
    description:
      'Your growing collection has gained you an invitation to attend a series of lectures for a month. You spend this month immersing yourself in as much literature as possible.',
    tags: [TAGS.MUNDANE],
    reward: [
      {
        type: REWARD_TYPE.Skill,
        id: Skills.RECITE_SKILL_ID,
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.OTHER,
        description:
          'Owning 2 accurate (rolled at 10+) Textbooks on the topics of Ancient History, Geography, Religion or World Politics. Being in a settlement of size Large or better.',
      },
    ],
  },
  {
    name: 'Intense Research',
    description:
      'You consult your books and cross-reference them with libraries and other places of scholarship that you have access to. Depending on the topic of research, the outcome will differ.',
    tags: [TAGS.MUNDANE],
    reward: [
      {
        type: REWARD_TYPE.Skill,
        id: Skills.CITE_SOURCES_SKILL_ID,
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.SKILL,
        id: Skills.RECITE_SKILL_ID,
      },
      {
        type: REQUIREMENT_TYPE.ITEM,
        id: Items.TEXTBOOK_ID,
        amount: 1,
      },
    ],
  },
  {
    name: 'The God of Man',
    description:
      'Your devotion to the primary deity of the area has gained you an invitation to receive a special anointing by the clergy. You feel a growing connection with god.',
    tags: [TAGS.MUNDANE],
    reward: [
      {
        type: REWARD_TYPE.Skill,
        id: Skills.BLESS_SKILL_ID,
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.ITEM,
        id: Items.HOLY_SYMBOL_ID,
        amount: 1,
      },
      {
        type: REQUIREMENT_TYPE.ITEM,
        id: Items.HOLY_BOOK_ID,
        amount: 1,
      },
      {
        type: REQUIREMENT_TYPE.OTHER,
        description: 'Having taken the Church Fellow experience.',
      },
    ],
  },
  {
    name: 'Medium Consultation',
    description:
      'You visit a medium to deal with your grief. They reach out into their glass orb and conjure up a spirit of import to you.',
    tags: [TAGS.MUNDANE],
    reward: [
      {
        type: REWARD_TYPE.Skill,
        id: Skills.PHASMOSENSITIVE_SKILL_ID,
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.OTHER,
        description:
          'Having experienced a traumatic loss during the character’s campaign or backstory.',
      },
    ],
  },
  {
    name: 'Spiritist Society',
    description:
      'Your curiosity about the Great Beyond has led you to meet a curious group of like-minded individuals.',
    tags: [TAGS.MUNDANE],
    reward: [
      {
        type: CHOICE_REWARD_TYPE.OR,
        reward: [
          {
            type: REWARD_TYPE.Skill,
            id: Skills.SEANCE_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.SIMPLE_PSYCHOKINESIS_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.DETECT_MOOD_SKILL_ID,
          },
        ],
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.SKILL,
        id: Skills.PHASMOSENSITIVE_SKILL_ID,
      },
      {
        type: REQUIREMENT_TYPE.OTHER,
        description: 'The Carpenter’s Hall Induction experience.',
      },
    ],
  },
  {
    name: 'Warrior’s Guild',
    description:
      'You join a local Warrior’s Guild for the month and train alongside them for the month.',
    tags: [TAGS.MUNDANE],
    reward: [
      {
        type: REWARD_TYPE.Skill,
        id: Skills.STURDY_SKILL_ID,
      },
      {
        type: REWARD_TYPE.Other,
        description: 'a Warrior’s Guild is added to the settlement'
      }
      {
        type: CHOICE_REWARD_TYPE.OR,
        reward: [
          {
            type: REWARD_TYPE.Skill,
            id: Skills.RIPOSTE_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.PARRY_SKILL_ID,
          },
          {
            type: REWARD_TYPE.Skill,
            id: Skills.BELLOW_SKILL_ID,
          },
        ],
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.OTHER,
        description:
          '(The Squire background or 3+ levels in learnable skills with the Combat tag), paying 20 coins.',
      },
    ],
  },
  {
    name: 'Hospitalized',
    description:
      'After being nearly struck down in battle, your allies were able to bandage your wounds and get you to a local healer. You were in a coma for nearly a month, but you eventually woke up. You suffered a great loss to your body, but your brush with death left you more closely attuned to the other side.',
    tags: [TAGS.NEAR_DEATH],
    reward: [
      {
        type: REWARD_TYPE.Skill,
        id: Skills.PHASMOSENSITIVE_SKILL_ID,
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.OTHER,
        description: 'Being stabilized after being near death',
      },
    ],
  },
  {
    name: 'Angels to Some',
    description:
      'You are visited by otherworldly beings, heralds of pain and torment. They flay your skin and rend your flesh, taking you to the brink of death before spitting you back out. The experience has taught you the meaning of pain, and has given you the motivation to inflict it back onto others. Add Cult of Pain, and Zealot Infestation to the settlement you are using Reflect & Learn in.',
    tags: [TAGS.SUPERNATURAL],
    reward: [
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.WILLPOWER,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Skill,
        id: Skills.TORTURE_SKILL_ID,
      },
      {
        type: REWARD_TYPE.Skill,
        id: Skills.ENDURE_SKILL_ID,
      },
      {
        type: REWARD_TYPE.Skill,
        id: Skills.WILLFUL_SKILL_ID,
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.OTHER,
        description: 'Solving the Sinner’s puzzlebox',
      },
    ],
  },
  {
    name: 'Hypertyphoon',
    description:
      'The astrolabe contains an ancient script which glows in the moonlight. It describes an astral calendar belonging to a long-forgotten people of the sea. You comprehend an incantation, and you read it. Suddenly, a fog rolls out from the sea. The moon glows of its own accord. You cannot tell, but it is almost as if the moon now has a face. It looks like it is screaming. Suddenly, a typhoon of massive proportions floods the settlement. Set the settlement to be Poor, <current size -1>, Shrinking, <current guard - 1>. Remove all other tags.',
    tags: [TAGS.SUPERNATURAL],
    reward: [
      {
        type: REWARD_TYPE.Skill,
        id: Skills.FISH_GILL_RITUAL_SKILL_ID,
      },
      {
        type: REWARD_TYPE.Skill,
        id: Skills.RAIN_DANCE_SKILL_ID,
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.OTHER,
        description: 'Fully contemplating the Coral-encrusted astrolabe',
      },
    ],
  },

  {
    name: 'Before the Eclipse',
    description:
      'A grim madness overcomes you as the book tempts your greed. You spend the month locked up in your room, whispering threats of unimaginable acts.',
    tags: [TAGS.SUPERNATURAL],
    reward: [
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.CONSTITUTION,
        amount: -1,
      },
      {
        type: REWARD_TYPE.Skill,
        id: Skills.TORTURE_SKILL_ID,
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.OTHER,
        description: 'A Textbook on the topic of the Lord of the Eclipse',
      },
    ],
  },
  {
    name: 'The Circle of Blood',
    description:
      'You use your influence to corrupt the settlement, building agents all over. These agents orchestrate an organized spree of murder, drawing out a massive magic circle of blood throughout the settlement. Add Shrinking to the settlement.',
    tags: [TAGS.SUPERNATURAL],
    reward: [
      {
        type: REWARD_TYPE.Property,
        id: Services.ADVENTURER_ID,
        additionalInfo:
          'this ally acts exactly like an Adventurer, but has no weekly cost',
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.OTHER,
        description:
          'A title in a settlement, the Before the Eclipse experience',
      },
    ],
  },
  {
    name: 'The Lunar Eclipse',
    description:
      'You summon a portent of a dark god, inviting him and his followers to dine upon the flesh of the living. Those within the settlement find themselves swallowed by the darkness, and are all dead. Lose your Scarred adventurer. Set the settlement to be Poor, Abandoned, Shrinking, None, Hostile. Remove all other tags.',
    tags: [TAGS.SUPERNATURAL],
    reward: [
      {
        type: REWARD_TYPE.Stat,
        stat: STAT.CONSTITUTION,
        amount: 1,
      },
      {
        type: REWARD_TYPE.Skill,
        id: Skills.INHUMAN_SKILL_ID,
      },
      {
        type: REWARD_TYPE.Skill,
        id: Skills.RAVENMORPH_SKILL_ID,
      },
      {
        type: REWARD_TYPE.Skill,
        id: Skills.BLOOD_SACRIFICE_SKILL_ID,
      },
    ],
    requires: [
      {
        type: REQUIREMENT_TYPE.OTHER,
        description:
          'Before the Eclipse experience, a settlement of size Medium with the Sacrificial Circle tag',
      },
    ],
  },
];
