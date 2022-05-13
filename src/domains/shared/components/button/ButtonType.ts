import React from 'react';
import { ColorType } from '../../constants';

export type ButtonSizeType = 'large' | 'medium' | 'small';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  color?: ColorType;
  textColor?: ColorType;
  size?: ButtonSizeType;
  isLoading?: boolean;
  disabled?: boolean;
}
