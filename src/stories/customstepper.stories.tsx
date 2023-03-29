import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TebStepper } from '../components';

export default {
    title: "Components/TebStepper",
    component: TebStepper,
    argTypes: {

    }
} as ComponentMeta<typeof TebStepper>;

export const BasicCustomStepper: ComponentStory<typeof TebStepper> = (args: any) =>
    <div >
        <TebStepper {...args} />
    </div>

BasicCustomStepper.args = {
    steps: ["Step1","Step2","Step3"],
}








