import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import TextInput from './TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = ({ ...args }) => {
  const [text, setText] = useState(args.value);

  return (
    <section style={{ width: '400px' }}>
      <TextInput
        {...args}
        id="storybook-email"
        labelText="E-mail"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div style={{ margin: 20 }} />
      <TextInput {...args} readOnly labelText="Phone number" value="82101234567" />
    </section>
  );
};

export const Example = Template.bind({});
Example.args = {
  withCount: true,
  maxLength: 100,
  placeholder: 'Front End',
  value: 'DewsPaper Front',
};
