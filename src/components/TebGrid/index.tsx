import React, { FC } from 'react';
import Grid, { GridProps } from '@mui/material/Grid';



export interface TebGridProps extends GridProps {
    type: string,
    children:any,
}

export const TebGrid: FC<TebGridProps> = ({ type = 'container', children, ...restProps }) => {
    return (
        <div>
            {
                type === 'item' ? (
                    <Grid item {...restProps}  >
                        {children}
                    </Grid>
                ) : (
                    <Grid container  {...restProps} >
                        {children}
                    </Grid>
                )
            }
        </div>
    );
}

