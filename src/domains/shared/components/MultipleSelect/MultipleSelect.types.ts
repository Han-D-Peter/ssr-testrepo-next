import React from 'react';

export interface ValueOption {
  key?: string;
  leftComponent?: React.ReactNode;
  label: string;
  value: string | number;
}

export interface MultipleSelectProps {
  options?: ValueOption[];
  value: ValueOption[];
  onChange: (newValue: ValueOption[]) => void;
  placeholder?: string;
}
