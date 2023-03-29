import React, {FC, useState} from 'react';

import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepIcon } from './StepIcon';

import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses, } from '@mui/material/StepConnector';
import StepButton from "@mui/material/StepButton";
import './CustomStepper.scss'

export interface CustomStepperProps {
    //sadece steplerin listesini alacak
    steps: string[];
    activeStepNo:number;

}

/*const steps = [
    'Select campaign settings',
    'Create an ad group',
    'Create an ad',
];
*/

const Connector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 18,

    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(10, 107, 64) 0%,rgb(10, 107, 64) 50%,rgb(10, 107, 64) 100%)',
            marginLeft:"8px",
            marginRight:"8px"
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
            marginLeft:"8px",
            marginRight:"8px",

        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 6,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 3,
        marginLeft:"8px",
        marginRight:"8px",

    },
}));

export const TebStepper: FC<CustomStepperProps> = ({steps = [],activeStepNo=0}) => {
    const [activeStep, setActiveStep] = React.useState(activeStepNo);
    const [compIsShown, setCompIsShown] = useState(false);

    const handleStep = (step: number) => () => {

        setActiveStep(step);
        setActiveStep(step);
        setCompIsShown(false);

    };

    return (
        <Stack className="stepper-wrapper"  spacing={8} >
            <Stepper className="stepper"
                alternativeLabel
                activeStep={activeStep}
                connector={<Connector />}>
                {steps.map((label,index) => (
                    <Step className="step" key={label}>
                        <StepLabel className="step-label" StepIconComponent={()=>(<StepIcon stepNo={index+1}/>)} onClick={handleStep(index)}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
}
