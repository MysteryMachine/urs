import { Icons } from '@/components/icons';

interface NavItem {
  title: string;
  to?: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  hash?: string;
}

interface NavItemWithChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export const mainMenu: NavItemWithChildren[] = [
  {
    title: 'Guide',
    items: [
      {
        title: 'Characters',
        to: '/#characters',
        hash: '#characters',
      },
      {
        title: 'Skill',
        to: '/#skills',
        hash: '#skills',
      },
      {
        title: 'Background & Experiences',
        to: '/#backgrounds-and-experiences',
        hash: '#backgrounds-and-experiences',
      },

      {
        title: 'World',
        to: '/#world',
        hash: '#world',
      },

      {
        title: 'Goods, Properties & Services',
        to: '/#goods-properties-services',
        hash: '#goods-properties-services',
      },
    ],
  },
];

export const sideMenu: NavItemWithChildren[] = [];
