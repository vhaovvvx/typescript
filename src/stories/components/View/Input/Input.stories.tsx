import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Example/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

let Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const EmailValidate = Template.bind({});
EmailValidate.args = {
  name: 'Email',
  type: 'text',
};
