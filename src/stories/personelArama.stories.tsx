import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PersonelArama } from './examplePages/PersonelArama';

export default {
  component: PersonelArama,
  title: 'Example Pages/Personel Arama',
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PersonelArama>;

export const PersonelAramaPage: ComponentStory<typeof PersonelArama> = () => <PersonelArama />;
