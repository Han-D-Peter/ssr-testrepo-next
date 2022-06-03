import React from 'react';
import { ColorType } from 'src/domains/shared/constants/constants';

export type ButtonSizeType = 'large' | 'medium' | 'small';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  color?: 'Gray800' | 'Primary100';
  size?: ButtonSizeType;
  isLoading?: boolean;
  disabled?: boolean;
}
