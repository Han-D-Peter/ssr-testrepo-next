import React from 'react';

export interface DropdownProps {
  title: string;
  TitleComponent?: React.ReactNode;
  listNames: string[];
  ListComponent?: React.FC<{ name: string }>;
}
