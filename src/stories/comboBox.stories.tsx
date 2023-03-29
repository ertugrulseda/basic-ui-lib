import React, { FC } from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComboBox } from '../components';

// export interface IComboBoxProps {
//   elements: Array<dataType>
// }


// type dataType = {
//   id: string,
//   ad: String
// }

// const ComboBoxStory: FC<IComboBoxProps> = ({ elements = [], ...rest }) => (
//   <ComboBox elements={elements}></ComboBox>
// );

export default {
  title: "Components/TebComboBox",
  component: ComboBox,
} as ComponentMeta<typeof ComboBox>;

export const BasicComboBox: ComponentStory<typeof ComboBox> = (args:any) => <ComboBox {...args} />;
BasicComboBox.args = {
  placeHolder:'Ülke Seçin',
  elements: [
    { id: '1', ad: 'Almanya' },
    { id: '2', ad: 'Polonya' },
    { id: '3', ad: 'Hollanda' },
    { id: '4', ad: 'İsrail' },
    { id: '5', ad: 'Türkiye' },
    { id: '6', ad: 'isviçre' }
  ]
};








