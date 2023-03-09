import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CustomStepper } from '../components';

export default {
    title: "Components/CustomStepper",
    component: CustomStepper,
    argTypes: {

    }
} as ComponentMeta<typeof CustomStepper>;

export const BasicCustomStepper: ComponentStory<typeof CustomStepper> = (args: any) =>
    <div >
        <CustomStepper {...args} />
    </div>

BasicCustomStepper.args = {
    steps: ["Step1","Step2","Step3"],
}








