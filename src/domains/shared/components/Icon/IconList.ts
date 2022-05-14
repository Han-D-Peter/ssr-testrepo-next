import SearchIcon from './Icons/SearchIcon';

export const iconList = {
  Search: SearchIcon,
} as const;

export type IconType = keyof typeof iconList;
