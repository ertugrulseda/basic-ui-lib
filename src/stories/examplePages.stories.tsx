import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Buttons } from './examplePages/buttons'

export default {
    component: Buttons,
    title:"Example Pages/All Buttons",
    argTypes: {},
} as ComponentMeta<typeof Buttons>;

export const AllButtons: ComponentStory<typeof Buttons> = (args) => <Buttons />;






