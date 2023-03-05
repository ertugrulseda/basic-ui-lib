import React, { FC } from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TebGrid } from '../components';
import { borderColor } from '@mui/system';
import Box from '@mui/material/Box';


export default {
  title: "Components/TebGrid",
  component: TebGrid,
} as ComponentMeta<typeof TebGrid>;

export const BasicTebGrid: ComponentStory<typeof TebGrid> = (args: any) =>
  <TebGrid type='container' direction="column" justifyContent="center"
    alignItems="center" spacing={2} sx={{ borderStyle: 'solid', borderColor: 'red' }} >
    <TebGrid type='item' xs={8} sm={8} md={8} sx={{ borderStyle: 'solid', borderColor: 'green' }}>
      <div>
        deneme 1
      </div>
    </TebGrid>
    <TebGrid type='item' xs={4} sm={4} md={4} sx={{ borderStyle: 'solid', borderColor: 'green' }}>
      <div>
        deneme 2
      </div>
    </TebGrid>
    <TebGrid type='item' xs={4} sm={4} md={4} sx={{ borderStyle: 'solid', borderColor: 'green' }}>
      <div>
        deneme 3
      </div>

    </TebGrid>
    <TebGrid type='item' xs={8} sm={8} md={8} sx={{ borderStyle: 'solid', borderColor: 'green' }}>
      <div>
        deneme 4
      </div>
    </TebGrid>
    <TebGrid type='item' xs={12} sm={12} md={12} sx={{ borderStyle: 'solid', borderColor: 'green' }}>
      <div>
        deneme 5
      </div>
    </TebGrid>
  </TebGrid>;

BasicTebGrid.args = {

};
