import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import TextInput from './TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = ({ ...args }) => {
  const [firstText, setFirstText] = useState(args.value);
  const [secondText, setSecondText] = useState(args.value);

  return (
    <section style={{ width: '400px' }}>
      <TextInput
        {...args}
        placeholder="검색어를 입력하세요."
        onChange={(e) => setFirstText(e.target.value)}
        value={firstText}
        variant="search"
      />
      <div style={{ margin: 20 }} />

      <TextInput
        {...args}
        id="storybook-email"
        labelText="E-mail"
        value={secondText}
        onChange={(e) => setSecondText(e.target.value)}
        type="email"
      />
    </section>
  );
};

export const Example = Template.bind({});
Example.args = {
  placeholder: '검색어를 입력해주세요.',
};
