import * as BGEBase from '@/data/bge-base';
import { ITEMS } from '@/data/items';
import { PROPERTIES } from '@/data/properties';
import { SERVICES } from '@/data/services';
import { SKILLS } from '@/data/skills';
import { Li } from '../ui/page';

const renderReward = (reward: BGEBase.Reward | string): string => {
  if (typeof reward === 'string') return reward;
  if (
    reward.type === BGEBase.REWARD_TYPE.AND ||
    reward.type === BGEBase.REWARD_TYPE.OR
  ) {
    return reward.rewards
      .slice(0, -1)
      .map(renderReward)
      .join(', ')
      .concat(reward.type === BGEBase.REWARD_TYPE.AND ? ' and ' : ' or ')
      .concat(renderReward(reward.rewards.slice(-1)[0]));
  } else if (
    reward.type === BGEBase.REWARD_TYPE.Item &&
    reward.id !== undefined
  ) {
    return reward.amount
      .toString()
      .concat(' ')
      .concat(reward.id ? ITEMS[reward.id]?.name || '' : '')
      .concat(
        reward.id && ITEMS[reward.id] && ITEMS[reward.id].variants
          ? // @ts-ignore
            ITEMS[reward.id].variants
              .slice(0, -1)
              .join(', ')
              .concat(', or ')
              // @ts-ignore
              .concat(ITEMS[reward.id].variants.slice(-1)[0]) || ''
          : ''
      )
      .concat(reward.amount > 1 ? 's' : '')
      .concat(reward.condition ? ' if '.concat(reward.condition) : '')
      .concat(' ');
  } else if (
    reward.type === BGEBase.REWARD_TYPE.Item &&
    reward.tags !== undefined
  ) {
    return `any item tagged ${reward.tags.join(' ')}`;
  } else if (reward.type === BGEBase.REWARD_TYPE.Property) {
    return 'a '.concat(PROPERTIES[reward.id]?.name || '').concat(
      reward.condition ? ' if '.concat(reward.condition) : ''
    );
  } else if (reward.type === BGEBase.REWARD_TYPE.Service) {
    return (SERVICES[reward.id]?.name || '').concat(
      reward.condition ? ' if '.concat(reward.condition) : ''
    );
  } else if (reward.type === BGEBase.REWARD_TYPE.Skill) {
    return `the ${SKILLS[reward.id]?.name || ''} skill`;
  } else if (reward.type === BGEBase.REWARD_TYPE.Stat) {
    return (reward.amount > 0 ? '+' : '')
      .concat(reward.amount.toString())
      .concat(' ')
      .concat(reward.stat);
  } else if (reward.type === BGEBase.REWARD_TYPE.Other) {
    return reward.description;
  }

  return '';
};

export const Reward = ({ reward }: { reward: BGEBase.Reward }) => {
  return <Li>{renderReward(reward)}</Li>;
};
