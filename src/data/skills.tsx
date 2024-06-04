import { STAT, ANY, NONE } from './stats';

export interface Bonus {
  tags?: string[];
  stats?: STAT[];
  bonusDamage?: number;
  bonusRoll?: number;
  bonusHP?: number;
}

export const TAGS = {
  MELEE: 'Melee',
  COMBAT: 'Combat',
  REACTION: 'Reaction',
  WEAPON: 'Weapon',
  WRESTLE: 'Wrestle',
  RITUAL: 'Ritual',
  STEALTH: 'Stealth',
  SHORT_RANGE: 'Short range',
  BONUS: 'Bonus',
  ANALYZE: 'Analyze',
  PERCEIVE: 'Perceive',
  VERBAL: 'Verbal',
  PERSUASION: 'Persuasion',
  CAMPAIGN: 'Campaign',
  SCHOLARLY: 'Scholarly',
  RELIGIOUS: 'Religious',
  DIALOGUE: 'Dialogue',
  PASSIVE: 'Passive',
  MEDICAL: 'Medical',
  CRIMINAL: 'Criminal',
  SUPERNATURAL: 'Supernatural',
};

export type Roll = [STAT] | [STAT, STAT] | ANY | NONE;

export interface Skill {
  name: string;
  description: string;
  tags?: string[];
  options?: string[];
  successOptions?: string[];
  fullSuccess?: string;
  success?: string;
  failure?: string;
  additionalInfo?: string;
  roll?: Roll;
  optionalRoll?: Roll;
  bonus?: Bonus;
  addOptions?: {
    id: string;
    options: string[];
  };
  sortNum: number;
}

export const BELLOW_SKILL_ID = 'BELLOW_SKILL_ID';
export const BLESS_SKILL_ID = 'BLESS_SKILL_ID';
export const BLOOD_SACRIFICE_SKILL_ID = 'BLOOD_SACRIFICE_SKILL_ID';
export const BOTANY_SKILL_ID = 'BOTANY_SKILL_ID';
export const BROWSE_MAGIC_SHOP_SKILL_ID = 'BROWSE_MAGIC_SHOP_SKILL_ID';
export const CHEMISTRY_SKILL_ID = 'CHEMISTRY_SKILL_ID';
export const CITE_SOURCES_SKILL_ID = 'CITE_SOURCES_SKILL_ID';
export const CONTEMPLATE_ASTROLABE_SKILL_ID = 'CONTEMPLATE_ASTROLABE_SKILL_ID';
export const DETAINMENT_SKILL_ID = 'DETAINMENT_SKILL_ID';
export const DETECT_MOOD_SKILL_ID = 'DETECT_MOOD_SKILL_ID';
export const DISARM_SKILL_ID = 'DISARM_SKILL_ID';
export const ENDURE_SKILL_ID = 'ENDURE_SKILL_ID';
export const EYE_FOR_DECEIT_SKILL_ID = 'EYE_FOR_DECEIT_SKILL_ID';
export const FENCE_SKILL_ID = 'FENCE_SKILL_ID';
export const FIELD_MEDICINE_SKILL_ID = 'FIELD_MEDICINE_SKILL_ID';
export const FISH_GILL_RITUAL_SKILL_ID = 'FISH_GILL_RITUAL_SKILL_ID';
export const FORMATION_SKILL_ID = 'FORMATION_SKILL_ID';
export const HAGGLE_SKILL_ID = 'HAGGLE_SKILL_ID';
export const INHUMAN_SKILL_ID = 'INHUMAN_SKILL_ID';
export const LOCKPICKING_SKILL_ID = 'LOCKPICKING_SKILL_ID';
export const MORAL_APPEAL_SKILL_ID = 'MORAL_APPEAL_SKILL_ID';
export const PARRY_SKILL_ID = 'PARRY_SKILL_ID';
export const PHASMOSENSITIVE_SKILL_ID = 'PHASMOSENSITIVE_SKILL_ID';
export const PICKPOCKET_SKILL_ID = 'PICKPOCKET_SKILL_ID';
export const PROWL_SKILL_ID = 'PROWL_SKILL_ID';
export const RAIN_DANCE_SKILL_ID = 'RAIN_DANCE_SKILL_ID';
export const RAVENMORPH_SKILL_ID = 'RAVENMORPH_SKILL_ID';
export const READ_PERSON_SKILL_ID = 'READ_PERSON_SKILL_ID';
export const RECITE_SKILL_ID = 'RECITE_SKILL_ID';
export const RIPOSTE_SKILL_ID = 'RIPOSTE_SKILL_ID';
export const SCOUT_SKILL_ID = 'SCOUT_SKILL_ID';
export const SCRY_SKILL_ID = 'SCRY_SKILL_ID';
export const SEANCE_SKILL_ID = 'SEANCE_SKILL_ID';
export const SEARCH_CONNECTIONS_SKILL_ID = 'SEARCH_CONNECTIONS_SKILL_ID';
export const SEARCH_FOR_TRAPS_SKILL_ID = 'SEARCH_FOR_TRAPS_SKILL_ID';
export const SEDUCTIVE_SKILL_ID = 'SEDUCTIVE_SKILL_ID';
export const SET_TRAP_SKILL_ID = 'SET_TRAP_SKILL_ID';
export const SIMPLE_PSYCHOKINESIS_SKILL_ID = 'SIMPLE_PSYCHOKINESIS_SKILL_ID';
export const SKULK_SKILL_ID = 'SKULK_SKILL_ID';
export const SLUGGER_SKILL_ID = 'SLUGGER_SKILL_ID';
export const SOLVE_PUZZLEBOX_SKILL_ID = 'SOLVE_PUZZLEBOX_SKILL_ID';
export const STURDY_SKILL_ID = 'STURDY_SKILL_ID';
export const SUMMON_LESSER_FAMILIAR_SKILL_ID =
  'SUMMON_LESSER_FAMILIAR_SKILL_ID';
export const SUTURE_SKILL_ID = 'SUTURE_SKILL_ID';
export const TAKE_AIM_SKILL_ID = 'TAKE_AIM_SKILL_ID';
export const TORTURE_SKILL_ID = 'TORTURE_SKILL_ID';
export const TRACK_SKILL_ID = 'TRACK_SKILL_ID';
export const VERIFY_TEXTBOOK_SKILL_ID = 'VERIFY_TEXTBOOK_SKILL_ID';
export const WILLFUL_SKILL_ID = 'WILLFUL_SKILL_ID';
export const WRESTLE_SKILL_ID = 'WRESTLE_SKILL_ID';
export const BRAWL_ID = 'BRAWL_ID';
export const VOLLEY_ID = 'VOLLEY_ID';
export const DUEL_ID = 'DUEL_ID';
export const BACKSTAB_ID = 'BACKSTAB_ID';
export const ANALYZE_FOR_WEAKNESSES_ID = 'ANALYZE_FOR_WEAKNESSES_ID';
export const FIND_OPENING_ID = 'FIND_OPENING_ID';
export const SURVEY_SURROUNDINGS_ID = 'SURVEY_SURROUNDINGS_ID';
export const GOAD_ID = 'GOAD_ID';
export const SHOT_CALL_ID = 'SHOT_CALL_ID';
export const RATIONALIZE_ID = 'RATIONALIZE_ID';
export const BRIBE_ID = 'BRIBE_ID';
export const INTIMIDATE_ID = 'INTIMIDATE_ID';
export const CHARM_ID = 'CHARM_ID';
export const USE_LEVERAGE_ID = 'USE_LEVERAGE_ID';

export const SKILLS: Record<string, Skill> = {
  [BRAWL_ID]: {
    sortNum: 0,
    name: 'Brawl',
    description:
      'When attacking something violently and carelessly in melee range',
    roll: [STAT.STRENGTH],
    tags: [TAGS.MELEE, TAGS.WEAPON, TAGS.COMBAT, TAGS.REACTION],
    fullSuccess:
      'Roll your weapon damage. Optionally, roll your damage a second time in return for suffering a consequence.',
    success: 'Roll your damage but suffer a consequence.',
    failure: 'Suffer a consequence.',
    additionalInfo:
      'You can declare a Brawl on your turn, or in reaction to an enemy melee attack on yourself.',
  },
  [WRESTLE_SKILL_ID]: {
    sortNum: 1,
    name: 'Wrestle',
    description: 'When attempting to restrain an enemy in melee',
    roll: [STAT.STRENGTH, STAT.CONSTITUTION],
    tags: [TAGS.MELEE, TAGS.COMBAT, TAGS.WRESTLE, TAGS.REACTION],
    options: [
      'Add 1+Str Choke to the enemy, minimum of 1. If the monster has more Choke than their hit dice, they pass out. They lose all Choke if they break free from your hold or let go.',
      'Deal 1d4 damage.',
      'When an ally attempts to Combat the enemy, you roll Wrestle again. If you succeed, your ally succeeds automatically. If you fail, your ally rolls as normal. Your hold continues regardless of the result.',
    ],
    fullSuccess: 'Select 2 from the list below.',
    success: 'Select 1 from the list above.',
    failure: 'They break free from your hold. Suffer a consequence.',
    additionalInfo:
      'You are unable to take non-Wrestle Combat skills without letting your hold go. You can declare a Wrestle on your turn, or in reaction to an enemy melee attack on yourself.',
  },
  [VOLLEY_ID]: {
    name: 'Volley',
    sortNum: 2,
    description: 'When attacking an enemy at range',
    roll: [STAT.STRENGTH, STAT.DEXTERITY],
    tags: [TAGS.SHORT_RANGE, TAGS.WEAPON, TAGS.COMBAT],
    successOptions: [
      'Use 1 extra ammunition to land the shot.',
      'Expose yourself to danger to find the shot.',
      'Isolate yourself to find the shot.',
    ],
    fullSuccess: 'Roll your weapon damage.',
    success:
      'Roll your damage but suffer a consequence from the list below. The Storyteller may add or remove options from the list.',
    failure: 'You miss. Suffer a consequence.',
  },
  [DUEL_ID]: {
    sortNum: 3,
    name: 'Duel',
    description:
      'When you fight someone carefully in melee range, guarding yourself against retaliation',
    roll: [STAT.DEXTERITY],
    tags: [TAGS.MELEE, TAGS.WEAPON, TAGS.COMBAT, TAGS.REACTION],
    fullSuccess: 'Roll your weapon damage.',
    success: 'Neither side manages to land a blow.',
    failure: 'Suffer a consequence.',
    additionalInfo:
      'You can declare a Duel on your turn, or in reaction to an enemy melee attack on yourself.',
  },
  [BACKSTAB_ID]: {
    sortNum: 4,
    name: 'Backstab',
    description:
      'When you attack from stealth or attack a defenseless target, either: deal your damage and are revealed to the creature',
    optionalRoll: [STAT.DEXTERITY],
    tags: [TAGS.MELEE, TAGS.WEAPON, TAGS.COMBAT, TAGS.STEALTH],
    options: [
      'You deal your damage',
      'You remove a piece of armor on the creature, reducing its armor by 1',
      'You maneuver the creature to somewhere advantageous',
      'Your character remains hidden to the creature',
    ],
    fullSuccess: 'Select 2 from the list below.',
    success: 'Select 1 from the list above.',
    failure:
      'Your attack misses, your character is now revealed to that creature.',
  },
  [ANALYZE_FOR_WEAKNESSES_ID]: {
    sortNum: 5,
    name: 'Analyze for Weaknesses',
    description:
      'When you take a split second to identify where an enemy’s weak points might be in their armor or physiology',
    roll: [STAT.INTELLIGENCE],
    tags: [TAGS.BONUS, TAGS.ANALYZE],
    options: [
      'You find a place especially susceptible to poison',
      'You find a place that, when struck deals x die of y damage',
      'You find an unarmored place on this enemy, gain x Armor Piercing when using Combat skills against the target',
      'You find a well guarded location that, when attacked with a Stealth, deals x die of y damage',
      'You identify a blind spot that, when taken advantage of, adds +1 Advantage to Stealth skills',
    ],
    fullSuccess:
      'You identify the enemy’s weak points. Upon telling your allies of the weakness, they gain +1 bonus on their own Analyze for Weaknesses rolls. Select from the options below, the storyteller may add or remove options.',
    success:
      'You cannot identify a weak point. When trying to find a weak point on this target next turn, gain +1 advantage.',
    failure:
      'You cannot identify a weak point. When trying to find a weak point on this target next turn, gain +1 disadvantage.',
    additionalInfo:
      'To take advantage of the weakness, the attacking player must have succeeded the Analyze for Weaknesses roll. For example, a player may have realized the giant frog’s liver is relatively external compared to its organs, and should be targeted. This gives their barbarian friend +1 bonus on their own Analyze for Weaknesses, but the barbarian still needs to be smart enough to figure out where the liver is on a frog.',
  },
  [FIND_OPENING_ID]: {
    sortNum: 6,
    name: 'Find Opening',
    description:
      'When you take a split second to identify an opening in your enemy’s fighting style',
    roll: [STAT.WILLPOWER],
    tags: [TAGS.BONUS, TAGS.PERCEIVE],
    options: [
      'Your next Combat roll this turn gain a +Wil bonus',
      'Your next instance of damage dealt by a combat roll deals 1d4 extra damage',
      'Your next Find Opening skill has advantage',
    ],
    fullSuccess:
      'Select 2 from the list below. The Storyteller may add or remove options.',
    success: 'Select 1 from the list below.',
    failure:
      'You cannot find an opening. You cannot use Find Opening next turn.',
  },
  [SURVEY_SURROUNDINGS_ID]: {
    sortNum: 7,
    name: 'Survey Surroundings',
    roll: [STAT.WILLPOWER, STAT.INTELLIGENCE],
    description:
      'When you survey your surroundings looking for something to gain an advantage during a moment of duress',
    tags: [TAGS.BONUS, TAGS.PERCEIVE, TAGS.ANALYZE],
    options: [
      'You find high ground, giving your ranged attacks +1 bonus',
      'You find cover, giving you advantage on defending against ranged attacks',
      'You find a good place to hide, putting you in stealth',
      'You find some sort of item you can use to your advantage',
    ],
    successOptions: [
      'You must expend an item to get to the advantage',
      'You can only get to the advantage on your next turn',
      'Getting to the advantage is risky',
    ],
    fullSuccess:
      'You find something useful from the list below. The Storyteller will tell you what. You gain a +1 bonus on your next roll utilizing the useful thing you found.',
    success: 'You find something, but there’s a catch.',
    failure: 'You find nothing of value.',
  },
  [GOAD_ID]: {
    sortNum: 8,
    name: 'Goad',
    description: 'When you taunt, intimidate, or goad an enemy in combat',
    roll: [STAT.CHARISMA],
    tags: [TAGS.BONUS, TAGS.REACTION, TAGS.VERBAL],
    options: [
      'The enemy redirects their attacks towards the player or an ally, and are susceptible to Stealth attacks by members of the party they are not targeting',
      'The enemy backs off for 1+Cha turns, minimum 1.',
      'The enemy is distracted, and all Melee Combat rolls against them until your next turn gain +1 bonus',
    ],
    fullSuccess:
      'Select 1 from the list below. The Storyteller may add or remove options.',
    success: 'You annoy the enemy, and if they can only attack you this turn.',
    failure: 'The enemy ignores your goading.',
    additionalInfo:
      'You can declare a Goad on your turn, or in reaction to an enemy melee attack on yourself or an ally. You can only Goad once per turn.',
  },
  [SHOT_CALL_ID]: {
    sortNum: 9,
    name: 'Shot Call',
    description: 'When you call a shot in battle, or dictate a stratagem',
    roll: [STAT.INTELLIGENCE],
    tags: [TAGS.BONUS, TAGS.VERBAL],
    fullSuccess:
      'Gain 3 Stratagem. When an allied player follows through on your plan, you can spend 1 Stratagem to give them a +1 bonus on any roll.',
    success: 'Gain 1 Stratagem.',
    failure:
      'You do not succeed in persuading your allies to follow your plans.',
  },
  [RATIONALIZE_ID]: {
    sortNum: 100,
    name: 'Rationalize',
    description:
      'When attempting to convince someone to do something using a logical appeal',
    roll: [STAT.CHARISMA, STAT.INTELLIGENCE],
    tags: [TAGS.PERSUASION],
    fullSuccess:
      'Your attempt to persuade the person succeeds and the Persuasion Event resolves.',
    success:
      'Your persuasion attempt fails, however, you have set doubts in the person’s mind. You and your allies cannot attempt to use the same fact or argument to change this person’s mind unless the Difficulty Modifier is reduced again. Reduce the Difficulty Modifier of the Persuasion Event by 1.',
    failure:
      'Your attempt is not persuasive. You and your allies cannot attempt to use the same fact or argument to change this person’s mind unless the Difficulty Modifier is reduced by another skill.',
  },
  [INTIMIDATE_ID]: {
    sortNum: 101,
    name: 'Intimidate',
    description:
      'When attempting to intimidate someone who could be intimidated to do something',
    roll: [STAT.CHARISMA, STAT.STRENGTH],
    tags: [TAGS.PERSUASION],
    fullSuccess:
      'Your attempt to intimidate the person succeeds and the Persuasion Event resolves.',
    success:
      'Your intimidation attempt fails, however, you have shaken the person. You and your allies cannot attempt to Intimidate this person again unless the Difficulty Modifier is reduced by another skill. Reduce the Difficulty Modifier of the Persuasion Event by 1.',
    failure:
      'Your intimidation attempt is not well received. Increase the Difficulty Modifier of the Persuasion Event by 2. Suffer a consequence.',
  },
  [BRIBE_ID]: {
    sortNum: 102,
    name: 'Bribe',
    description: 'When attempting to bribe someone',
    roll: [STAT.CHARISMA, STAT.WILLPOWER],
    tags: [TAGS.PERSUASION],
    successOptions: [
      'Give the greater bribe, reduce the Difficulty Modifier of the Persuasion Event by 1.',
      'Give a lesser bribe, and do not reduce the Difficulty Modifier.',
      'Your party cannot attempt to Bribe again for this Persuasion Event.',
    ],
    fullSuccess:
      'If that person would accept a bribe, a smaller trinket or a smaller quantity of coin will suffice as a bribe. Reduce the Difficulty Modifier of the Persuasion Event by 1. Alternatively, the player can accept giving a greater bribe, at which point, the Persuasion Event resolves.',
    success:
      'If that person would accept a bribe, the person is amenable to a bribe, but it would require a bigger trinket or quantity of coin to convince them. Pick one of the three options below.',
    failure:
      'Your bribe is not well received. Increase the Difficulty Modifier of the Persuasion Event by 1. Your party cannot attempt to Bribe again for this Persuasion Event.',
    additionalInfo:
      'The value of a bribe is determined by the Storyteller, though some standard bribes are listed in the Unspecialized Services section. Greater bribes might include doing favors or going on quests for someone.',
  },
  [CHARM_ID]: {
    sortNum: 104,
    name: 'Charm',
    description:
      'When attempting to befriend or seduce someone in order to convince them of something',
    roll: [STAT.CHARISMA],
    tags: [TAGS.PERSUASION],
    fullSuccess:
      'Your attempt to charm the person succeeds, reduce the Difficulty Modifier of the Persuasion Event by 1.',
    success:
      'Your attempt to charm the person succeeds, but any more might be too much, reduce the Difficulty Modifier of the Persuasion Event by 1. You have +1 Disadvantage on any other Charm attempts for this Persuasion Event.',
    failure:
      'Your attempt to Charm the person fails. You have +1 Disadvantage on any other Charm attempts for this Persuasion Event.',
  },
  [READ_PERSON_SKILL_ID]: {
    sortNum: 105,
    name: 'Read Person',
    description: 'When attempting to read a person',
    roll: [STAT.WILLPOWER],
    tags: [TAGS.PERSUASION],
    options: [
      'Does this person seem possible to intimidate?',
      'Would this person take a bribe?',
      'Do I have any leverage over this person?',
      'What fact seemed most persuasive to this person? You are able to attempt to Rationalize using that fact again, and you get a +1 bonus on that roll.',
      'What is this person’s disposition towards this belief?',
      'Is there something this person has said that does not seem entirely truthful? This question may be asked again if the player has more questions they can ask.',
    ],
    fullSuccess:
      'Ask 2 of the following questions to the Storyteller. You may Read Person again after using a Persuasion action.',
    success:
      'Ask 1 question above. You may Read Person again after using a Persuasion action.',
    failure:
      'You do not notice anything. You cannot use Read Person again until the Difficulty Modifier of this Persuasion Event is reduced.',
  },
  [USE_LEVERAGE_ID]: {
    sortNum: 109,
    name: 'Use Leverage',
    description: 'When you attempt to use your leverage over a person',
    roll: [STAT.INTELLIGENCE],
    tags: [TAGS.PERSUASION],
    fullSuccess:
      'Your attempt to use your leverage the person succeeds and the Persuasion Event resolves.',
    success:
      'Reduce the Difficulty Modifier by 1. You and your party cannot Use Leverage with this specific piece of leverage again during this Persuasion Event.',
    failure:
      'You and your party cannot Use Leverage with this specific piece of leverage again during this Persuasion Event. Increase the Difficulty Modifier of this Persuasion Event by 2.',
    additionalInfo:
      'Having leverage means some sort of thing that might compel the person to make a difficult choice, like having authority over them, having a hostage, or being in control of a situation they might not want to come to pass.',
  },
  [SCOUT_SKILL_ID]: {
    sortNum: 200,
    name: 'Scout',
    description:
      'Your history of surveying the land while hunting has taught you how to effectively navigate wild and dangerous landscapes. When traveling',
    roll: [STAT.WILLPOWER],
    tags: [TAGS.CAMPAIGN],
    options: [
      'You automatically succeed on Travel rolls as if you rolled a 10+ for the next three days.',
      'You find a shortcut, and manage to travel 4 days worth of traveling in 3.',
    ],
    fullSuccess: 'Select two of the options below.',
    success: 'Pick one of the options above.',
    failure: 'Suffer a consequence.',
  },
  [SEARCH_FOR_TRAPS_SKILL_ID]: {
    sortNum: 201,
    name: 'Search for Traps',
    description:
      'Your experience dungeoneering has taught you about the different kinds of traps that exist in the world, and how to identify them. When attempting to search for traps,',
    roll: [STAT.WILLPOWER, STAT.INTELLIGENCE],
    tags: [TAGS.CAMPAIGN],
    fullSuccess:
      'If there are traps, you find one. You can search for traps again. If you do so, roll with advantage.',
    success:
      'If there are traps, you find one. You can search for traps again.',
    failure: 'You do not find a trap. You cannot roll to search again.',
  },
  [SET_TRAP_SKILL_ID]: {
    sortNum: 202,
    name: 'Set Trap',
    description:
      'If you have Trap components and a few minutes to set up a trap, select a trap from the following options and set it on the ground in front of you. If a creature steps on the trap in a moment of duress, it will trigger.',
    tags: [TAGS.CAMPAIGN],
    options: [
      'Bear trap: Deal 1d4 damage. The creature is unable to run away or give chase.',
      'Weapon trap: Requires a weapon. On activation, this trap deals the weapon’s damage dice.',
      'Explosive trap: Requires Oil. On activation, this trap sets fire to the nearby surroundings, dealing 1d6 damage to characters in the vicinity, and possibly triggers other consequences. The Storyteller will tell you what.',
      'Net trap: Requires a net. The creature is incapacitated.',
    ],
  },

  [DISARM_SKILL_ID]: {
    sortNum: 203,
    name: 'Disarm Trap',
    description:
      'Your knowledge of basic mechanics has granted you a knack for disarming dangerous traps when traveling. When attempting to disarm a trap with a Lockpicking Kit',
    roll: [STAT.DEXTERITY, STAT.INTELLIGENCE],
    tags: [TAGS.CAMPAIGN],
    fullSuccess: 'You succeed.',
    success: 'You succeed, but suffer a consequence.',
    failure: 'You suffer a consequence.',
  },
  [BLESS_SKILL_ID]: {
    sortNum: 205,
    name: 'Bless',
    description:
      'Your religious studies have given you a rudimentary ability to bless individuals with your deity’s favor. Once per day, when consecrating a person with the rites of your deity',
    roll: [STAT.WILLPOWER],
    tags: [TAGS.RELIGIOUS],
    fullSuccess:
      'They gain a Blessing token, which they can spend to roll any skill with advantage. You may grant your deity’s blessing again today to a different person.',
    success:
      'They gain a Blessing token, which they can spend to roll any skill with advantage. You may NOT grant your deity’s blessing again today.',
    failure:
      'Nothing happens. You may NOT grant your deity’s blessing again today.',
  },
  [HAGGLE_SKILL_ID]: {
    sortNum: 205,
    name: 'Haggle',
    description:
      'Your time working as a tradesperson has given you a knack for haggling. When making a purchase of one or more items of a cost of more than 10 coins',
    roll: [STAT.CHARISMA],
    tags: [TAGS.PERSUASION],
    fullSuccess: 'Gain a 1d4+Cha discount.',
    success:
      'The merchant is willing to give you a 1d4+Cha discount if you buy 5 coins more worth of goods. You cannot Haggle again today.',
    failure:
      'The merchant is not willing to budge. You cannot Haggle again today.',
  },
  [RECITE_SKILL_ID]: {
    name: 'Recite',

    sortNum: 206,
    description:
      'Your time studying has given you a broad sense of the world, and knowledge of many of its facets. When consulting ones learned experiences for relevant facts',
    roll: [STAT.INTELLIGENCE],
    tags: [TAGS.SCHOLARLY],
    fullSuccess: 'You know something interesting, and directly useful.',
    success:
      "You know a related fact, but it's up to the players on how to make it useful.",
    failure: 'You don’t know anything about this subject.',
  },
  [SEDUCTIVE_SKILL_ID]: {
    sortNum: 207,
    name: 'Seductive',
    description:
      'Your time spent in socializing with others has given you a knack for getting what you want. Once per day, per level of Seductive, when attempting to Bribe or Charm a person, on success, reduce the Difficulty Modifier of the Persuasion Event by an additional point. You are not allowed to use Seductive multiple times on the same roll of Bribe or Charm.',
    tags: [TAGS.PASSIVE, TAGS.DIALOGUE],
  },
  [STURDY_SKILL_ID]: {
    sortNum: 209,
    name: 'Sturdy',
    description:
      'Your training has given you a sturdy and stout body, capable of withstanding blows and getting back up for more. Gain an additional 2 base hit points for every level of Sturdy.',
    bonus: { bonusHP: 2 },
    tags: [TAGS.PASSIVE, TAGS.COMBAT],
  },
  [FORMATION_SKILL_ID]: {
    sortNum: 210,
    name: 'Formation',
    description:
      'When standing next to other characters holding a shield, gain +1 to Defensive rolls. For each additional level, add an additional +1 for every additional shield.',
    tags: [TAGS.PASSIVE, TAGS.COMBAT],
  },
  [SKULK_SKILL_ID]: {
    sortNum: 211,
    name: 'Skulk',
    description:
      'Your history of passing by disguised and unseen has allowed you to blend into large crowds and given you a knack for using sewers, roofs, and other bits of urban landscape to infiltrate. When attempting to infiltrate a busy urban environment',
    roll: [STAT.DEXTERITY, STAT.WILLPOWER],
    tags: [TAGS.CAMPAIGN],
    options: [
      'You infiltrate without a trace, drawing no attention to yourself or anyone accompanying you.',
      'You leave a path open for your friends, giving them advantage on rolls to sneak over.',
      'You are able to infiltrate quickly.',
      'You expend no resources in your infiltration.',
    ],
    fullSuccess:
      'You successfully arrive at your destination. Choose two from the list below.',
    success:
      'You successfully arrive at your destination. Choose one from the list above.',
    failure: 'You fail. Suffer a consequence.',
  },
  [TAKE_AIM_SKILL_ID]: {
    sortNum: 212,
    name: 'Take Aim',
    description:
      'When you attack with a bow from stealth, either: deal your damage and are revealed to the creature',
    optionalRoll: [STAT.DEXTERITY],
    tags: [TAGS.SHORT_RANGE, TAGS.COMBAT, TAGS.STEALTH],
    options: [
      'You deal your damage.',
      'You remove a piece of armor on the creature, reducing its armor by 1.',
      'Your character remains hidden to the creature.',
    ],
    fullSuccess: 'Select 2 from the list below.',
    success: 'Select 1 from the list above.',
    failure:
      'Your attack misses, your character is now revealed to that creature.',
  },
  [TORTURE_SKILL_ID]: {
    sortNum: 212,
    name: 'Torture',
    description:
      'When torturing a captured subject to get what you want, if that subject is susceptible to torture',
    roll: [STAT.INTELLIGENCE],
    tags: [TAGS.CAMPAIGN],
    options: [
      'The subject does not die from your torture.',
      'The subject provides you with the information immediately.',
      'The subject provides you exactly what you were looking for.',
    ],
    fullSuccess:
      'The subject gives in to your demands. Select three from below.',
    success: 'Select one from above.',
    failure: 'The subject expires from your torture.',
  },
  [ENDURE_SKILL_ID]: {
    sortNum: 220,
    name: 'Endure',
    description: 'When taking damage that would take you below 1 hit point',
    roll: [STAT.WILLPOWER, STAT.CONSTITUTION],
    tags: [TAGS.COMBAT],
    fullSuccess:
      'You endure the hit, and are reduced to 1 hit point instead. You are knocked out for the remainder of the combat encounter.',
    success:
      'You endure the hit, and are reduced to 1 hit point instead. Suffer an injury. You are knocked out for the remainder of the combat encounter.',
    failure: 'You fail to endure the hit.',
  },
  [WILLFUL_SKILL_ID]: {
    sortNum: 221,
    name: 'Willful',
    description:
      'Your willpower is unmatched. One per day, per level of Willful, when rolling Willpower, roll with advantage. You are not allowed to use Willful multiple times on the same roll.',
    tags: [TAGS.PASSIVE],
  },
  [SLUGGER_SKILL_ID]: {
    sortNum: 222,
    name: 'Slugger',
    description:
      'Once per combat, per level of Slugger, when inflicting damage due to a Strength based Melee Combat roll, deal +Str extra damage on a 6+ roll.',
    tags: [TAGS.PASSIVE, TAGS.COMBAT],
  },
  [SUTURE_SKILL_ID]: {
    name: 'Suture',
    sortNum: 223,
    description:
      'When you have 30 minutes to quietly suture an injury suffered as the result of a cut to the flesh, as well as some needle and thread',
    roll: [STAT.INTELLIGENCE],
    tags: [TAGS.MEDICAL],
    fullSuccess: 'Remove the injury immediately.',
    success: 'Remove the injury, inflict 1d6 damage on the player.',
    failure:
      'The injury is beyond your abilities, you are not able to try to Suture it again.',
  },
  [FIELD_MEDICINE_SKILL_ID]: {
    sortNum: 224,
    name: 'Field Medicine',
    description:
      'In combat, you may quickly apply bandages to someone in exchange for one of the following consequences.',
    tags: [TAGS.BONUS, TAGS.MEDICAL],
    options: [
      'The bandage heals 2 less damage.',
      'You and your target are put in a bad position, either in immediate peril or are separated from your team. The Storyteller will tell you how.',
    ],
  },
  [MORAL_APPEAL_SKILL_ID]: {
    sortNum: 225,
    name: 'Moral Appeal',
    description:
      'When using Rationalize on common folk or religious individuals, gain +1 per level when the argument is either an appeal to their morals or religious beliefs.',
    tags: [TAGS.PERSUASION],
  },
  [TRACK_SKILL_ID]: {
    name: 'Track',

    sortNum: 230,
    description: 'When attempting to trace a target’s steps',
    roll: [STAT.INTELLIGENCE, STAT.WILLPOWER],
    tags: [TAGS.CAMPAIGN],
    options: [
      'No one notices you while you are tracking your target.',
      'You are able to track your target quickly.',
      'You expend no resources while tracking your target.',
    ],
    fullSuccess:
      'You are able to track the target to their destination. Select two options from the list below.',
    success:
      'You are able to track the target to their destination. Select one option from the list above.',
    failure: 'You are unable to track your target.',
  },
  [PROWL_SKILL_ID]: {
    name: 'Prowl',
    sortNum: 231,
    description:
      'When attempting to move stealthily towards a target in the brush, forests, or swamps',
    roll: [STAT.DEXTERITY, STAT.INTELLIGENCE],
    tags: [TAGS.CAMPAIGN],
    options: [
      'Roll Wrestle or Backstab with advantage.',
      'Other creatures in the area do not notice you.',
      'You expend no resources in your advance towards your target.',
    ],
    fullSuccess:
      'You successfully prowl close enough to the target to strike. Choose two options from the list below.',
    success: 'Choose one option from the list above.',
    failure: 'You fail. Suffer a consequence.',
  },
  [PICKPOCKET_SKILL_ID]: {
    name: 'Pickpocket',
    sortNum: 233,
    description: 'When attempting to steal a small item from someone',
    roll: [STAT.DEXTERITY],
    tags: [TAGS.CRIMINAL],
    fullSuccess:
      'You are able to steal the item without drawing attention to yourself.',
    success: 'You are able to steal the item, however, suffer a consequence.',
    failure: 'You are unable to steal the item. Suffer a consequence.',
  },
  [LOCKPICKING_SKILL_ID]: {
    name: 'Lockpick',
    sortNum: 234,
    description:
      'When attempting to pick a lock, if you have a Lockpicking kit',
    roll: [STAT.INTELLIGENCE, STAT.DEXTERITY],
    tags: [TAGS.CRIMINAL],
    options: [
      'You do not expend your Lockpicking kit.',
      'You do not draw any attention to yourself.',
      'You are able to pick the lock quickly.',
    ],
    fullSuccess: 'You open the door. Select 2 of the options below.',
    success: 'You open the door. Pick one option from above.',
    failure: 'The lock is beyond your abilities.',
  },
  [CITE_SOURCES_SKILL_ID]: {
    name: 'Cite Sources',
    sortNum: 240,
    description:
      'When using Rationalize to argue about a topic inside one of your textbooks, roll with advantage.',
    tags: [TAGS.PASSIVE],
  },
  [BOTANY_SKILL_ID]: {
    name: 'Botany',
    sortNum: 241,
    description:
      'When you take a level of Botany, select any item tagged with Apothecary. When you have time to spend a day in a settlement searching for ingredients, you may make the item at the cost of the item’s value divided by half the size of that settlement’s prosperity die. For example, for a settlement with a d4 prosperity die, the cost of making a 30 coins potion would be 15 coins.',
    tags: [TAGS.SCHOLARLY, TAGS.MEDICAL],
  },
  [CHEMISTRY_SKILL_ID]: {
    name: 'Chemistry',
    sortNum: 244,
    description:
      'When in a settlement, if you have time to spend a day creating explosives, you may make up to <level of Chemistry>d2 firebombs at the cost of 5 coins per firebomb made.',
    tags: [TAGS.SCHOLARLY],
  },
  [SEARCH_CONNECTIONS_SKILL_ID]: {
    name: 'Search Connections',
    sortNum: 250,
    description:
      'You know plenty of powerful people. When using Gossip & Rumor in a settlement you hold a title in, always succeed as if you had rolled a 10+.',
    tags: [TAGS.PASSIVE],
  },
  [BELLOW_SKILL_ID]: {
    name: 'Bellow',
    sortNum: 251,
    description:
      'Your time on the battlefield has taught you the value of instilling fear in your enemies. When letting out an intimidating bellow',
    roll: [STAT.CONSTITUTION],
    tags: [TAGS.BONUS],
    fullSuccess:
      'Your enemies are intimidated by your bellow. Reduce the damage dealt by enemy melee attacks on allies by 2*Con times this turn, with a max of Con reduced for a single instance of damage.',
    success:
      'Your enemies are intimidated by your bellow. Reduce the damage dealt by enemy melee attacks on allies by Con times this turn.',
    failure: 'You’re unable to intimidate your enemies.',
  },
  [RIPOSTE_SKILL_ID]: {
    name: 'Riposte',
    sortNum: 260,
    description:
      'Even in a defensive position, your refined swordplay allows you to land strikes on foes. Once per combat, per level of Riposte, when rolling a 6-9 on Duel, deal 1d4 damage to your target.',
    tags: [TAGS.PASSIVE, TAGS.COMBAT],
  },
  [PARRY_SKILL_ID]: {
    name: 'Parry',
    sortNum: 261,
    description:
      'You’ve learned to redirect and use the momentum of the enemy’s weapon against them. When using Defend, you may roll +Dex/Wil instead of +Str/Con. Once per combat, per level of Parry, you may roll Defend with an additional +Dex bonus.',
    tags: [TAGS.PASSIVE],
  },
  [SEANCE_SKILL_ID]: {
    name: 'Seance',
    sortNum: 300,
    description:
      'Your supernatural dealings have given you strange new ways to see into the Great Beyond. After using Seance, you have Disadvantage on all Seance rolls for the rest of the day. When taking the time to perform a seance, using a Crystal ball',
    roll: [STAT.CHARISMA, STAT.WILLPOWER],
    tags: [TAGS.SUPERNATURAL],
    fullSuccess:
      'The spirits speak to you. Name a spirit, and if it wishes to speak to you, it will come. Otherwise, a helpful spirit will step forth instead. You may ask this spirit three questions, and it will answer each question with one sentence.',
    success:
      'A helpful spirit steps forth to answer a single question. It will answer with one sentence.',
    failure: 'No spirits step forth.',
  },
  [SIMPLE_PSYCHOKINESIS_SKILL_ID]: {
    name: 'Simple Psychokinesis',
    sortNum: 301,
    description:
      'When you take a minute to focus, you may pull items of less than 1 weight, from up to 4 meters away, to you.',
    tags: [TAGS.SUPERNATURAL],
  },
  [DETECT_MOOD_SKILL_ID]: {
    name: 'Detect Mood',
    sortNum: 302,
    description:
      'When spending a minute to quietly focus while staring at someone, you may detect the mood of that person. The Storyteller will reveal their mood by describing a color.',
    tags: [TAGS.SUPERNATURAL],
  },
  [FENCE_SKILL_ID]: {
    name: 'Fence',
    sortNum: 310,
    description: 'When you want to sell a hot item to the criminal underbelly',
    roll: [STAT.CHARISMA, STAT.WILLPOWER],
    tags: [TAGS.CRIMINAL],
    fullSuccess:
      'A buyer in this settlement is willing to buy it off of you for market value.',
    success:
      'A buyer in this settlement is willing to buy it off of you for half its market value.',
    failure: 'The buyer turned out to be a guard. Suffer a consequence.',
  },
  [VERIFY_TEXTBOOK_SKILL_ID]: {
    sortNum: 10000,
    name: 'Verify Textbook',
    description: 'Before using a textbook, if the Storyteller requires it',
    roll: NONE,
    tags: [TAGS.PASSIVE],
    fullSuccess:
      'The textbook has accurate information. From now on, if you have time to consult the textbook, ask the DM a question about the textbook’s subject. They must answer truthfully. The more specific the subject declared, the more detailed the information must be.',
    success:
      'The textbook contains unclear, out of date, inaccurate, or muddled information. If you have time to consult the textbook, ask the DM a question about the textbook’s subject. They will give you information that can be unclear, subtly incorrect, or even exactly right.',
    failure: 'The textbook is clearly useless.',
  },
  [INHUMAN_SKILL_ID]: {
    name: 'Inhuman',
    sortNum: 10100,
    description:
      'You have an obviously inhuman aura about you, such that even those who aren’t sensitive to such things can tell there is something wrong about you. Individuals that abhor demons and magic will attack you on sight, and most others will prefer to keep their distance from you. Upon taking this skill, write down a tell on your body that signifies this inhuman characteristic.',
    tags: [TAGS.PASSIVE],
  },
  [SCRY_SKILL_ID]: {
    sortNum: 10200,
    name: 'Scry',
    description:
      'You are able to gaze into the orb, across space to find an object or a person of your choice. When doing so',
    roll: [STAT.WILLPOWER],
    tags: [TAGS.SUPERNATURAL],
    fullSuccess:
      'You find what you are looking for, and have a clear picture of precisely where it is. The orb grows dull for the next week, rendering you unable to use it in that time.',
    success:
      'You find what you are looking for, but it is not clear where exactly it might be. The orb grows dull for the next month, rendering you unable to use it in that time.',
    failure:
      'You are unable to find what you are looking for. The orb grows dull for the next month, rendering you unable to use it in that time.',
  },
  [SUMMON_LESSER_FAMILIAR_SKILL_ID]: {
    sortNum: 10300,
    name: 'Summon Lesser Familiar',
    description:
      'Once per day, you are able to ring your bell to summon a mundane creature no bigger than a housecat to do your bidding. This creature will serve you for up to an hour before returning to the ether.',
    tags: [TAGS.SUPERNATURAL],
  },
  [SOLVE_PUZZLEBOX_SKILL_ID]: {
    name: 'Solve Puzzlebox',
    sortNum: 10400,
    description:
      'Put 4 Puzzle tokens on the Puzzlebox. When spending the evening trying to solve the puzzle, when it is not inert',
    roll: [STAT.INTELLIGENCE],
    tags: [TAGS.SUPERNATURAL],
    fullSuccess: 'Remove one token from the box.',
    success:
      'Remove one token from the box. The puzzlebox remains inert for the next week.',
    failure:
      'You are unable to make progress on the puzzle. The puzzlebox remains inert for the next week.',
    additionalInfo:
      'Upon removing the final token, be forced to take the Angels to Some experience next Rest & Reflect the party takes. Remove the puzzlebox from your inventory.',
  },
  [CONTEMPLATE_ASTROLABE_SKILL_ID]: {
    sortNum: 10400,
    name: 'Contemplate Astrolabe',
    description:
      'Put 4 Astral tokens on the Astrolabe. When pondering the inscriptions of the Astrolabe at night, while being surrounded by sea,',
    roll: [STAT.INTELLIGENCE],
    tags: [TAGS.SUPERNATURAL],
    fullSuccess: 'Remove one token from the astrolabe.',
    success:
      'Remove one token from the astrolabe. The astrolabe remains inert for the next week.',
    failure:
      'You are unable to make progress on the astrolabe. The astrolabe remains inert for the next week.',
    additionalInfo:
      'Upon removing the final token, be forced to take the Hypertyphoon experience next Rest & Reflect the party takes.',
  },
  [RAVENMORPH_SKILL_ID]: {
    sortNum: 10600,
    name: 'Ravenmorph',
    description:
      'To conduct the Ravenmorph ritual, you must first draw a magic circle in a feathered creature’s blood, build a human sized nest, and finally curl up nude into a ball inside the nest. Your body will solidify as if it was a rock. When attempting the ritual',
    roll: [STAT.INTELLIGENCE],
    tags: [TAGS.RITUAL],
    fullSuccess:
      'The ritual goes as planned. Your body cracks in half, and a raven the size of a bulldog emerges. This raven inherits your hitpoints and other stats, and has a 1d6 damage dice. It is able to fly and speak.',
    success:
      'The ritual goes mostly as planned. Your body cracks in half, and a raven the size of a cat emerges. This raven inherits your hitpoints and other stats, and has a 1d4 damage dice. It is able to fly and speak.',
    failure: 'The ritual fails. Suffer an injury.',
    additionalInfo:
      'To return to your human body, the raven must return to its nest, and lay an egg. After a day, the egg will grow to the size of a human, and you will hatch from the egg. If the nest or the raven are destroyed before the egg is laid, you die. After attempting this ritual, you cannot attempt it again for a week.',
  },
  [RAIN_DANCE_SKILL_ID]: {
    sortNum: 10700,
    name: 'Rain Dance',
    description:
      'This ritual requires dancing so erratically around a wooden or stone effigy of a seagull that you suffer a minor injury. The Storyteller will tell you what that injury is. When spending an hour to conduct a ritual dance, petitioning the spirits of the sky to bring down rain',
    roll: [STAT.CHARISMA],
    tags: [TAGS.RITUAL],
    fullSuccess:
      'The ritual goes as planned. The sky pours down rain for the next day, falling over more or less where you needed the rain to go, at the intensity you desire.',
    success:
      'The ritual goes mostly as planned. The Storyteller will give you a consequence.',
    failure: 'The ritual fails. No rain is created.',
    additionalInfo:
      'After attempting this ritual, you cannot attempt it again for a week.',
  },
  [FISH_GILL_RITUAL_SKILL_ID]: {
    name: 'Fish Gill Ritual',
    sortNum: 10701,
    description:
      'This ritual requires a sacrifice of 5 portions of fish – 5 uses of rations. When spending an hour to conduct a ritual, petitioning the murky gods of the sea for a person’s passage into their domain',
    roll: [STAT.CHARISMA],
    tags: [TAGS.RITUAL],
    fullSuccess:
      'The ritual goes as planned. The target gains the ability to breathe underwater for the remainder of the day.',
    success:
      'The ritual goes mostly as planned. The ritual has manifested itself through horrifying gills becoming present on the target. They cannot breathe outside of water for the remainder of the day. They suffer a minor injury to their neck after the magic wears off.',
    failure:
      'The ritual fails. The target suffers a minor injury to their neck.',
    additionalInfo:
      'After attempting this ritual, you cannot attempt it again for a week.',
  },
  [BLOOD_SACRIFICE_SKILL_ID]: {
    name: 'Blood Sacrifice',
    sortNum: 10601,
    description:
      'When sacrificing a human child in order to heal your permanent injuries',
    roll: NONE,
    tags: [TAGS.RITUAL],
    fullSuccess: 'The ritual goes as planned. The injury is healed.',
    success:
      'The ritual goes as mostly as planned. The injury is no longer permanent, and will heal next Rest & Reflect.',
    failure: 'The ritual fails. ',
  },
  [BROWSE_MAGIC_SHOP_SKILL_ID]: {
    sortNum: 10003,
    name: 'Browse Magic Shop',
    description:
      'When you browse the magic shop, roll (prosperity die) + (size die)',
    fullSuccess:
      'They can select any item with the Magic Shop and buy it. They can roll again.',
    success:
      'They can select any item with the Magic Shop tag and buy it. They cannot roll again until conflicts advance.',
    failure:
      'The magic shop has no worthwhile items. They cannot roll again until the conflicts advance.',
  },
  [DETAINMENT_SKILL_ID]: {
    sortNum: 50,
    name: 'Detainment',
    description: 'When succeeding a Wrestle roll, add the following options:',
    tags: [TAGS.COMBAT],
    addOptions: {
      id: WRESTLE_SKILL_ID,
      options: [
        'If you have rope on your person, you are able to use it to tie up the target’s arms. If their legs are tied up too, they are incapacitated for the rest of the fight, unless freed by someone else.',
        'If you have rope on your person, you are able to use it to tie up the target’s legs. If their arms are tied up too, they are incapacitated for the rest of the fight, unless freed by someone else.',
      ],
    },
  },
  [EYE_FOR_DECEIT_SKILL_ID]: {
    sortNum: 100,
    name: 'Eye for Deceit',
    description:
      'When succeeding a Read Person roll, on a 10+, add the following options:',
    tags: [TAGS.PASSIVE, TAGS.DIALOGUE],
    addOptions: {
      id: READ_PERSON_SKILL_ID,
      options: [
        'What, if anything, is this person lying about? Is this lie damning enough that it can be used as leverage?',
        'You learn how to navigate this person’s mannerisms. Gain +1 on all future Read Person rolls that take place during this encounter.',
      ],
    },
  },
};

export const SKILLS_ARR: Skill[] = Object.values(SKILLS).sort(
  (a, b) => a.sortNum - b.sortNum
);
