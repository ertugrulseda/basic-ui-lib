import {InputSize} from './types'
import type {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
} from '@mui/base/useAutocomplete/useAutocomplete'; 
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

