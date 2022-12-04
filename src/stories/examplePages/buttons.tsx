import React from 'react';

import { TebButton } from '../../components';



export const Buttons = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", width:300 }}>
            <TebButton color="success" variant="contained" label='Contained' onClick={() => { }} sx={{ marginBottom: 1 }}  />
            <TebButton variant="outlined" label='Outlined' onClick={() => { }} />
        </div>
    );
}