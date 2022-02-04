import { ComponentStory, ComponentMeta } from '@storybook/react';


import Loader from './index';

export default {
  title: 'Loader',
  component: Loader,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large']
    },
    backgroundColor: {
      control: {
        type: 'color'
      }
    }
  }
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Small = Template.bind({});
Small.args = {
  backgroundColor: 'red',
  size: 'small'
}


export const Large = Template.bind({});
Large.args = {
  backgroundColor: 'red',
  size: 'large'
}