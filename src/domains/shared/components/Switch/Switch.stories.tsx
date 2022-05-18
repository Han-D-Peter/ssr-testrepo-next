import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Switch from './Switch';

export default {
  title: 'Switch',
  component: Switch,
  parameters: {
    componentSubtitle: 'Switch Component를 보여줍니다.',
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = ({ ...args }) => {
  return <Switch {...args} />;
};

export const Example = Template.bind({});
