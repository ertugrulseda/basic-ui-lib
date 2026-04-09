import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TebAutoComplete } from '../components';
import { InputSize } from '../utils/types';

type OptionType = { label: string; value: string };

export default {
  title: 'Components/TebAutoComplete',
  component: TebAutoComplete,
  argTypes: {
    id: {
      control: 'text',
      description: 'Input ID',
    },
    name: {
      control: 'text',
      description: 'Input name (hidden input için)',
    },
    label: {
      control: 'text',
      description: 'Input etiketi',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder metni',
    },
    helperText: {
      control: 'text',
      description: 'Yardım metni',
    },
    helperIcon: {
      control: 'text',
      description: 'Yardım ikonu adı',
    },
    disabled: {
      control: 'boolean',
      description: 'Devre dışı bırak',
    },
    error: {
      control: 'boolean',
      description: 'Hata durumu',
    },
    width: {
      control: 'text',
      description: 'Genişlik (px veya %)',
    },
    zIndex: {
      control: { type: 'number', min: 0, max: 99999, step: 1 },
      description: 'z-index değeri',
    },
    margin: {
      control: 'text',
      description: 'Dış boşluk (px veya %)',
    },
    size: {
      control: 'select',
      options: [InputSize.small, InputSize.medium, InputSize.large],
      description: 'Input boyutu',
    },
    noOptionsText: {
      control: 'text',
      description: 'Seçenek bulunamadığında gösterilecek metin',
    },
    tabIndex: {
      control: { type: 'number', min: -1, max: 100, step: 1 },
      description: 'Tab sırası',
    },
    onChange: { action: 'onChange' },
    onInputChange: { action: 'onInputChange' },
    getOptionLabel: { table: { disable: true } },
    isOptionEqualToValue: { table: { disable: true } },
    options: { table: { disable: true } },
    value: { table: { disable: true } },
    inputValue: { table: { disable: true } },
  },
} as ComponentMeta<typeof TebAutoComplete>;

const sampleOptions: OptionType[] = [
  { label: 'Türkiye', value: 'TR' },
  { label: 'Almanya', value: 'DE' },
  { label: 'Fransa', value: 'FR' },
  { label: 'İtalya', value: 'IT' },
  { label: 'İspanya', value: 'ES' },
  { label: 'Hollanda', value: 'NL' },
  { label: 'Polonya', value: 'PL' },
];

export const BasicAutoComplete: ComponentStory<typeof TebAutoComplete> = (args: any) => (
  <div style={{ width: 400, padding: 24 }}>
    <TebAutoComplete
      {...args}
      options={sampleOptions}
      getOptionLabel={(option: OptionType) => option.label}
      isOptionEqualToValue={(option: OptionType, val: OptionType) => option.value === val.value}
    />
  </div>
);

BasicAutoComplete.args = {
  id: 'autocomplete-demo',
  name: 'country',
  label: 'Ülke Seçin',
  placeholder: 'Arama yapın...',
  helperText: '',
  helperIcon: 'circle-info',
  disabled: false,
  error: false,
  width: '100%',
  zIndex: 10002,
  margin: 0,
  size: InputSize.small,
  noOptionsText: 'Seçenek bulunamadı',
  tabIndex: 0,
};
