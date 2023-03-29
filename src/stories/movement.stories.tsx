import React, {  useState } from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Movement, ComboBox,MovementProps } from '../components';
import { TextField, Autocomplete } from '@mui/material'
import { BorderStyle } from '@mui/icons-material';
import { red } from '@mui/material/colors';

export default {
    title: "Components/TebMovement",
    component: Movement,
    argTypes: {
        displayGeri: {
            options: ['true', 'none'],
            control: { type: 'radio' }
        },
        displayIleri: {
            options: ['true', 'none'],
            control: { type: 'radio' }
        },
        displayKaydet: {
            options: ['true', 'none'],
            control: { type: 'radio' }
        }

    },
    onGeriClick: { action: 'clicked' },
    onIleriClick: { action: 'clicked' },
    onKaydetClick: { action: 'clicked' },
} as ComponentMeta<typeof Movement>;

type dataType = {
    id: string,
    ad: string
}

const top10Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }];

  
export const BasicMovement: ComponentStory<typeof Movement> = (args: MovementProps) => {
    return (
        <Movement  displayGeri={'true'} displayIleri={'true'} displayKaydet={'false'} {...args} >
            <div style={{ width: '100%', height: '200px', borderStyle: 'solid', borderColor: 'red' }}>
                Buraya istediğimiz kompoenentleri koyarız
            </div>
        </Movement>);
}




BasicMovement.args = {
    displayGeri: 'true',
    displayIleri: 'true',
    displayKaydet: 'none',
    onGeriClick: () => alert("Geri clicked"),
    onIleriClick: () => {
        console.log(BasicMovement.args)
        BasicMovement.args!.displayGeri='none'
        alert("ileri clicked")
    },
    onKaydetClick: () => alert("kaydet clicked")    

}

