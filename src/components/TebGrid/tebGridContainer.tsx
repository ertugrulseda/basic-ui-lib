import React from 'react';
import Grid , { GridProps }  from '@mui/material/Grid';



export interface TebGridContainerProps extends GridProps {
	restProps?: any
}

export const TebGridContainer = ({...restProps}) => {
	return (
		<Grid container {...restProps} >

		</Grid>
	);
}

