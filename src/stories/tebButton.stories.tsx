import React from 'react';
import { Meta, Story } from "@storybook/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TebButton } from '../components';

export default {
  title: "Components/TebButton",
  component: TebButton,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      options: ['contained', 'outlined'],
      control: { type: 'select' },
    },
  }
} as ComponentMeta<typeof TebButton>;

export const BasicButton: ComponentStory<typeof TebButton> = (args) => <TebButton {...args} />;
BasicButton.args = {
  label: "Button",
};

export const SedaButton: ComponentStory<typeof TebButton> = (args) => <TebButton {...args} />;
SedaButton.args = {
  label: "Sedaaaa",
  variant: "outlined",
  color:"success",
  onClick: () => alert("naber")
};






