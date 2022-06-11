import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import Switch from './Switch';

export default {
  title: 'Switch',
  component: Switch,
  parameters: {
    componentSubtitle: 'Switch Component를 보여줍니다.',
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = ({ ...args }) => {
  const [checked, setChecked] = useState(false);
  const onChange = () => {
    setChecked((prev) => !prev);
  };

  return <Switch {...args} checked={checked} onChange={onChange} />;
};

export const Example = Template.bind({});
