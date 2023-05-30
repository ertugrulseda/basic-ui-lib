import React, { FC } from "react";
import './TebTelephoneInput.scss';
import { TextField, Typography, InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";


export interface TebTelephoneInputProps {
    ulkeKodu:string,
    ulkeTelefonKodu:string,
    telefonNumarasi:string
}

export const TebTelephoneInput: FC<TebTelephoneInputProps> = ({ ulkeKodu,ulkeTelefonKodu,telefonNumarasi }) => {

    return (   
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <TextField
                    id="input-with-icon-textfield"
                    placeholder="(5xx) xxx xxxx" 
                    value={telefonNumarasi}  
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Box sx={{ display: 'flex', alignItems:'center' }}>
                                    <img src={`https://www.countryflagicons.com/SHINY/64/${ulkeKodu}.png`} width={24} height={24} />
                                    <Typography>{ulkeTelefonKodu}</Typography>
                                </Box>
                            </InputAdornment>
                        ),
                    }} 
                />
            </Box>
    );
}
