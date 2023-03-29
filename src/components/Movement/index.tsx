import React, { FC, useEffect, useState } from 'react';
import './Movement.scss'
import { Button } from "@mui/material";
import { Grid } from '@mui/material';



export interface MovementProps { 
    displayGeri?:string,
    displayIleri?:string,
    displayKaydet?:string,
    onGeriClick : () => void,
    onIleriClick : () => void,
    onKaydetClick : () => void,
    children: any,

}


export const Movement: FC<MovementProps> = ({children,displayGeri,displayIleri,displayKaydet,onGeriClick,onIleriClick,onKaydetClick}) => {
 
    return (
        <Grid className="cointainer" container spacing={2} >
            <Grid className="top" item xs={12} md={12}>
                {children}
            </Grid>
            <Grid className="body" item xs={12} md={12}>
                <Button variant="outlined" sx={{ display: `${displayGeri}` }}  onClick={onGeriClick} >Geri</Button>
                <Button variant="contained" sx={{ display: `${displayIleri}` }} onClick={onIleriClick} >İleri</Button>   
                <Button variant="contained" sx={{ display: `${displayKaydet}` }} onClick={onKaydetClick}>Kaydet</Button>
            </Grid>
        </Grid>

    );
}
