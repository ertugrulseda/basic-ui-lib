import { createTheme } from '@mui/material';
import { InputState, InputStyle } from '../../utils';

interface CustomInputStyles {
  color?: string;
  borderColor?: string;
  labelColor?: string;
  hoverBorderColor?: string;
  hoverLabelColor?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
}

const customColorPalette = (
  disabled: boolean,
  error: boolean,
): CustomInputStyles => {
  if (disabled) {
    return {
      color: '#C0BFBE',
      borderColor: '##DFDFDE',
      labelColor: '#C0BFBE',
    };
  }
  if (error) {
    return {
      color: '#D52727',
      borderColor: '#D52727',
      labelColor: '#D52727',
      hoverBorderColor: '#D52727',
      hoverLabelColor: '#D52727',
    };
  }
  return {
    color: '#2D2926',
    borderColor: '#DFDFDE',
    labelColor: '',
    hoverBorderColor: '#00915A',
    hoverLabelColor: '#00915A',
  };
};

export const createInputTheme = (props: InputState, styleProps: InputStyle) => {
  const { disabled, error } = props;
  const { width, margin, color, zIndex } = styleProps;

  const styles = customColorPalette(disabled, error);

  return createTheme({
    palette: {
      primary: {
        main: color,
      },
    },
    zIndex: {
      modal: zIndex,
    },
    typography: {
      fontFamily: 'Rubik',
    },
    components: {
      MuiAutocomplete: {
        styleOverrides: {
          input: {
            color: '#2D2926',
            fontSize: 14,
            fontWeight: '400',
            fontStyle: 'normal',
            lineHeight: '16px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontVariantNumeric: 'lining-nums proportional-nums',
          },
          inputRoot: {
            width: `${width}${typeof width === 'number' ? 'px' : ''}`,
            height: 40,
            padding: 0,
            fontSize: 14,
          },
          root: {
            padding: '',
            '.MuiOutlinedInput-root.MuiInputBase-sizeSmall .MuiAutocomplete-input':
              {
                padding: '6px 0 6px 10px',
              },
            '.MuiOutlinedInput-root .MuiAutocomplete-input': {
              padding: 0,
            },
            '.MuiAutocomplete-endAdornment': {
              paddingRight: 8,
            },
            '.MuiAutocomplete-hasClearIcon .MuiAutocomplete-hasPopupIcon': {
              fontSize: '12px',
            },
          },
          popupIndicator: {
            color: '#ABA9A8',
            'Mui-disabled': {
              color: '#ABA9A8',
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            '.MuiOutlinedInput-input': {
              maxHeight: '40px',
              '.Mui-disabled': {
                color: 'ABA9A8',
              },
            },
            '.MuiInputBase-input-MuiOutlinedInput-input': {
              padding: 0,
            },
          },
        },
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            margin: `${margin}${typeof margin === 'number' ? 'px' : ''}`,
            '.MuiInputBase-root': {
              borderRadius: '4px',
              BorderColor: '#DFDFDE',
              'fieldset legend': {
                width: 0,
              },
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            width: width ?? '100%',
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            margin: 0,
            padding: '0 4px',
            fontFamily: 'Rubik',
            fontStyle: 'normal',
            fontWeight: 400,
            background: '#fff',
            'MuiInputLabel-root': {
              top: '2px',
            },
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            position: 'absolute',
            top: '40px', // leave it as it is until custom autocomplete component is ready
            margin: '4px 0 0 0',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderWidth: '1px',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor:
                disabled || error
                  ? styles.borderColor
                  : styles.hoverBorderColor,
            },
            '&:focus-within .MuiOutlinedInput-notchedOutline': {
              borderWidth: '1px',
              borderColor:
                disabled || error
                  ? styles.borderColor
                  : styles.hoverBorderColor,
            },
            '&:active .MuiOutlinedInput-notchedOutline': {
              borderWidth: '1px',
              borderColor:
                disabled || error
                  ? styles.borderColor
                  : styles.hoverBorderColor,
            },
            '.MuiInputBase-sizeSmall .MuiAutocomplete-input': {
              padding: '12px 16px 12px 16px',
            },
          },
          notchedOutline: {
            borderColor: styles.borderColor,
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: styles.color,
            '&.Mui-focused': {
              color:
                disabled || error
                  ? styles.borderColor
                  : styles.hoverBorderColor,
            },
          },
        },
      },
    },
  });
}; 

