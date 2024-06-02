import { STAT } from './stats';

export interface Bonus {
  tags?: string[];
  stats?: STAT[];
  bonusDamage?: number;
  bonusRoll?: number;
}

export const TAGS = {
  MELEE: 'Melee',
  COMBAT: 'Combat',
};

interface Skill {}

export const SKILLS: Skill[] = [];

export const BROWSE_MAGIC_SHOP_ID = 0;
export const VERIFY_TEXTBOOK_ID = 0;
export const SCRY_ID = 0;
export const SUMMON_LESSER_FAMILIAR_ID = 0;
export const CONTEMPLATE_ASTROLABE_ID = 0;
export const SOLVE_PUZZLEBOX_ID = 0;
