import React from 'react';
import Grid , { GridProps }  from '@mui/material/Grid';



export interface TebGridItemProps extends GridProps {
	restProps?: any
}

export const TebGridItem = ({...restProps}) => {
	return (
		<Grid item {...restProps} >
           
		</Grid>
	);
}

