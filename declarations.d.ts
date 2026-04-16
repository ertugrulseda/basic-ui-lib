
declare module 'basic-ui-lib' {

import React from 'react';
import { AgGridReact,AgGridReactProps } from 'ag-grid-react';
import type { CSSProperties } from 'react';
import type {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
} from '@mui/base/useAutocomplete/useAutocomplete'; 

  export interface TebDataGridEnterpriseProps extends AgGridReactProps {
    style?: CSSProperties;
    [key: string]: any;
  }
  export const TebDataGridEnterprise: React.ForwardRefExoticComponent<TebDataGridEnterpriseProps & React.RefAttributes<AgGridReact>>;

  export type Variants = 'contained' | 'outlined';

  export interface TebButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variants;
    label: string;
    onClick: () => void;
  }
  export const TebButton: React.FC<TebButtonProps>; 


export enum InputSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
} 
  export interface TebAutoCompleteProps<T> {
    id?: string;
    name?: string;
    label?: string;
    tabIndex?: number;
    options: T[];
    value?: T | null;
    disabled: boolean;
    inputValue?: string;
    helperText?: string;
    helperIcon?: string;
    placeholder?: string;
    error: boolean;
    width?: string | number;
    zIndex?: number;
    size: InputSize;
    margin?: string | number;
    noOptionsText: React.ReactNode;
    getOptionLabel?: (option: T) => string;
    isOptionEqualToValue?: (option: T, value: T) => boolean;
    onChange?: (
      event: React.SyntheticEvent,
      value: T | null,
      reason: AutocompleteChangeReason,
      details?: AutocompleteChangeDetails<T>,
    ) => void;
    onInputChange?: (
      event: React.SyntheticEvent,
      value: string,
      reason: AutocompleteInputChangeReason,
    ) => void;
  } 
  export const TebAutoComplete: React.FC<TebAutoCompleteProps<any>>; // Placeholder for actual props

}

declare module '*.scss' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '*.css' {
  const styles: { [className: string]: string };
  export default styles;
}
