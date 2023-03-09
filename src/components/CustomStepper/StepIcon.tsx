import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export interface StepIconProps extends SvgIconProps {

}

export  const StepIcon: FC<StepIconProps> = ({ ...restProps }) => {
    return (
        <SvgIcon viewBox="0 0 38 38" style={{ fontSize: 38 }} {...restProps} >
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="18.9999" r="12.7179" fill="#0A6B40" />
                <circle cx="19" cy="19" r="17.2308" stroke="#0D7840" stroke-width="2.46154" />
            </svg>
        </SvgIcon>
    ); 
}