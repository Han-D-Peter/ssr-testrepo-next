import SearchIcon from './Icons/SearchIcon';
import CheckIcon from './Icons/CheckIcon';
import CloseIcon from './Icons/CloseIcon';

export const iconList = {
  Search: SearchIcon,
  Check: CheckIcon,
  Close: CloseIcon,
} as const;

export type IconType = keyof typeof iconList;
