import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Icon from './Icon';
import { iconList, IconType } from './IconList';

export default {
  title: 'Icon',
  component: Icon,
  parameters: {
    componentSubtitle: '사용할 수 있는 여러 아이콘들을 보여줍니다.',
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = ({ children, ...args }) => {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>Primary100 Button</h2>
          {Object.keys(iconList).map((icon) => (
            <Icon key={icon} {...args} icon={icon as IconType} size={24} style={{ marginBottom: '20px' }} />
          ))}
        </div>
      </div>
    </>
  );
};

export const Example = Template.bind({});
Example.args = {
  children: 'Example',
};
