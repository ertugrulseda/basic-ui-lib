import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material';
import { orange, purple } from '@mui/material/colors';
import { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';
import * as React from 'react';


const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: purple[500],
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
        success: {
            main: "#43a047"
        }
    },
});



export interface TebThemeProviderProps extends ThemeProviderProps {
    children: React.ReactNode,
    customTheme?: ThemeOptions,
}


export const TebThemeProvider = ({ children, customTheme }: TebThemeProviderProps) => {
    return (
        <ThemeProvider theme={{ ...theme, ...customTheme }}>
            {children}
        </ThemeProvider>
    );
}




