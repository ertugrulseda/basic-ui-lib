import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TebDataGrid } from '../components';
import { boolean } from '@storybook/addon-knobs';
import { Button } from '@mui/material';



export default {
  title: "Components/TebDataGrid",
  component: TebDataGrid,
  argTypes: {
    hasPagination:boolean,
    isStripped:boolean,
    columns: [],
    rows:[]
  }
} as ComponentMeta<typeof TebDataGrid>;

export const BasicDataGrid: ComponentStory<typeof TebDataGrid> = (args: any) => <TebDataGrid {...args} />;

function handleClick(event:any){
  window.alert("Clicklendi..."+event.target.innerText)
}

BasicDataGrid.args = {
  hasPagination: false,
  isStripped: false,
  columns : [
    {
      id: '0',
      label: 'Tatlılar (100gr)',
    },
    {
      id: '1',
      label: 'Kalorisi',
      format: (value: number) => value.toLocaleString('tr-TR'),
    },
    {
      id: '2',
      label: 'Yağ (g)',
      format: (value: number) => value.toFixed(2),
    },
    {
      id: '3',
      label: 'Dinamik Buttonlar',
    }

  ],
   rows : [
    { name:'Cupcake',calories: 305, fat:3.7,component:<Button  onClick={handleClick} style={{backgroundColor:'red'}}>'Deneme'</Button>},
    { name:'Donut',calories: 452, fat:25.0,component:<Button  onClick={handleClick}>Deneme0</Button>},
    { name:'Eclair',calories: 305, fat:3.7,component:<Button>Deneme1</Button>},
    { name:'Frozen yoghurt',calories: 159, fat:3.7,component:<Button>Deneme2</Button>},
    { name:'Gingerbread',calories: 356, fat:3.7,component:<Button>Deneme3</Button>},
    { name:'Honeycomb',calories: 408, fat:3.7,component:<Button>Deneme4</Button>},
    { name:'Ice cream sandwich',calories: 305, fat:3.7,component:''},
    { name:'Jelly Bean',calories: 375, fat:3.7,component:''},
    { name:'KitKat',calories: 518, fat:3.7,component:''},
    { name:'Lollipop',calories: 392, fat:3.7,component:''},
    { name:'Marshmallow',calories: 318, fat:3.7,component:''},
    { name:'Nougat',calories: 360, fat:3.7,component:''},
    { name:'Oreo',calories: 437, fat:3.7,component:''}
  ]
};












