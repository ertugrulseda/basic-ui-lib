import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TebTelephoneInput } from '../components';

export default {
  title: "Components/TebTelephoneInput",
  component: TebTelephoneInput,
  argTypes: {
   
  }
} as ComponentMeta<typeof TebTelephoneInput>;

export const BasicTelephoneInput: ComponentStory<typeof TebTelephoneInput> = (args:any) => <TebTelephoneInput {...args} />;
BasicTelephoneInput.args = {
  ulkeKodu:'TR',
  ulkeTelefonKodu:'+90',
  telefonNumarasi:'5436211818'
};








