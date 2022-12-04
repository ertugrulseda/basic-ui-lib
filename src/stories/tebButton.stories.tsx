import React from 'react';

import { TebButton } from '../components';

export default {
  title: 'TebButton',
  component: TebButton,
  
  argTypes: {},
};

const Template = (args) => <TebButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'contained',
  label: 'Click Me',
};





