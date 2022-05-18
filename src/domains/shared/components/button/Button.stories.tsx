import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Button from './Button';
import { ButtonSizeType } from './ButtonType';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    componentSubtitle: '사용할 수 있는 여러 버튼들을 보여줍니다.',
  },
} as ComponentMeta<typeof Button>;

const BUTTON_SIZES: ButtonSizeType[] = ['small', 'medium', 'large'];

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>Primary100 Button</h2>
          {BUTTON_SIZES.map((size) => (
            <Button key={size} {...args} color="Primary100" size={size} style={{ marginBottom: '20px' }}>
              {children}
            </Button>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>Primary50 Button</h2>
          {BUTTON_SIZES.map((size) => (
            <Button key={size} {...args} color="Primary50" size={size} style={{ marginBottom: '20px' }}>
              {children}
            </Button>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>Gray010 Button</h2>
          {BUTTON_SIZES.map((size) => (
            <Button key={size} {...args} color="Gray010" size={size} style={{ marginBottom: '20px' }}>
              {children}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h2>Loading</h2>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {BUTTON_SIZES.map((size) => (
            <Button key={size} {...args} isLoading color="Primary100" size={size} style={{ marginRight: '20px' }}>
              {children}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h2>Disabled Buttons</h2>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {BUTTON_SIZES.map((size) => (
            <Button disabled key={size} {...args} size={size} style={{ marginRight: '20px' }}>
              {children}
            </Button>
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
