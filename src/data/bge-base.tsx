import { ReactNode } from 'react';
import { STAT } from './stats';

export enum REWARD_TYPE {
  Stat,
  Item,
  Skill,
  Property,
  Service,
  Other,
  AND,
  OR,
}

export const TAGS = {};

export interface BaseReward {
  type: REWARD_TYPE;
  additionalInfo?: ReactNode;
  condition?: string;
}

export interface StatReward extends BaseReward {
  type: REWARD_TYPE.Stat;
  stat: STAT;
  amount: number;
}

export interface SkillsPropertiesOrServicesReward extends BaseReward {
  type: REWARD_TYPE.Skill | REWARD_TYPE.Service | REWARD_TYPE.Property;
  id: string;
}

export interface ItemReward extends BaseReward {
  type: REWARD_TYPE.Item;
  id?: string;
  tags?: string[];
  amount: number;
}

export interface OtherReward extends BaseReward {
  type: REWARD_TYPE.Other;
  description: string;
}

export type SimpleReward =
  | ItemReward
  | StatReward
  | SkillsPropertiesOrServicesReward
  | OtherReward;

export type CHOICE_REWARD_TYPE = REWARD_TYPE.OR | REWARD_TYPE.AND;

export type ChoiceReward = { type: CHOICE_REWARD_TYPE; rewards: Reward[] };

export type Reward = SimpleReward | ChoiceReward;

export interface BackgroundExperience {
  name: string;
  description: string;
  tags?: string[];
  reward: Reward[];
  sortNum: number;
}
