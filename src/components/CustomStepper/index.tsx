import React, { FC } from 'react';

import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepIcon } from './StepIcon';

import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses, } from '@mui/material/StepConnector';


export interface CustomStepperProps {
    //sadece steplerin listesini alacak
    steps: string[];

}

/*const steps = [
    'Select campaign settings',
    'Create an ad group',
    'Create an ad',
];
*/

const Connector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}));


export const CustomStepper: FC<CustomStepperProps> = ({steps = []}) => {
    return (
        <Stack sx={{ width: '100%' }} spacing={8} >
            <Stepper
                alternativeLabel
                activeStep={1}
                connector={<Connector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
}
