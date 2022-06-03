import React from 'react';

export type ButtonSizeType = 'large' | 'medium' | 'small';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  color?: 'Gray800' | 'Primary100';
  size?: ButtonSizeType;
  isLoading?: boolean;
  disabled?: boolean;
}
