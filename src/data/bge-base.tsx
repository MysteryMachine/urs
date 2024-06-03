import { ReactNode } from 'react';
import { STAT } from './stats';

export enum REWARD_TYPE {
  Stat,
  Item,
  Skill,
  Property,
  Service,
  Other
}

export const TAGS = {};

export interface BaseReward {
  type: REWARD_TYPE;
  tags?: string[];
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
  id: number;
}

export interface ItemReward extends BaseReward {
  type: REWARD_TYPE.Item;
  id?: number;
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

export enum CHOICE_REWARD_TYPE {
  AND,
  OR,
}

export type ChoiceReward = { type: CHOICE_REWARD_TYPE; reward: Reward[] };

export type Reward = SimpleReward | ChoiceReward;

export interface BackgroundExperience {
  name: string;
  description: string;
  tags?: string[],
  reward: Reward[];
}
