import React, { useState, type FC, useEffect } from 'react';
import { Icon } from 'tebicons';
import { ThemeProvider } from '@mui/material/styles';
import {
  TextField,
  Autocomplete,
  AutocompleteRenderInputParams,
} from '@mui/material';
import {
  type AutocompleteChangeDetails,
  type AutocompleteChangeReason,
  type AutocompleteInputChangeReason,
} from '@mui/base/useAutocomplete/useAutocomplete';
import styles from './TebAutoComplete.module.scss';
import { MuiSize } from '../../utils';
import { createInputTheme } from './autocomplete-utils';
import classNames from 'classnames';
import { TebAutoCompleteProps } from '../../utils/props';

const DEAFULT_MARGIN = 0;
const DEAFULT_WIDTH = '100%';
const DEFAULT_COLOR = '#72706E';
const DEFAULT_HELPER_ICON = 'circle-info';

const POPUP_ICON_SIZE = 16;
const CLEAR_ICON_SIZE = 12;
const HELPER_ICON_SIZE = 14;
const DEFAULT_Z_INDEX = 10002;
const HELPER_ICON_DEFAULT_MARGIN = 4;
const HELPER_ICON_DEAFULT_PADDING = 1;
const HELPER_ICON_DEFAULT_COLOR = '#2D2926';
const HELPER_ICON_DISABLED_COLOR = '#C0BFBE';

const TebAutoComplete: FC<TebAutoCompleteProps<any>> = <T,>({
  id,
  name,
  value,
  error,
  options,
  tabIndex,
  disabled,
  inputValue,
  label = '',
  helperText = '',
  placeholder = '',
  noOptionsText,
  width = DEAFULT_WIDTH,
  margin = DEAFULT_MARGIN,
  zIndex = DEFAULT_Z_INDEX,
  helperIcon = DEFAULT_HELPER_ICON,
  onChange,
  onInputChange,
  getOptionLabel,
  isOptionEqualToValue,
}: TebAutoCompleteProps<T>) => {
  const [val, setVal] = useState(value);
  const [inputVal, setInputVal] = useState(inputValue);

  useEffect(() => {
    setVal(value);
  }, [value]);

  const handleChange = (
    event: React.SyntheticEvent,
    value: T | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<T>,
  ): void => {
    setVal(value);
    onChange?.(event, value, reason, details);
  };

  const handleInputChange = (
    event: React.SyntheticEvent,
    value: string,
    reason: AutocompleteInputChangeReason,
  ): void => {
    setInputVal(value);
    onInputChange?.(event, value, reason);
  };

  const theme = createInputTheme(
    { disabled, error },
    {
      width,
      color: DEFAULT_COLOR,
      zIndex,
      margin,
    },
  );

  const helperTextClasses = classNames(styles.helperTextContainer, {
    [styles.disabled]: disabled,
    [styles.error]: error,
  });

  const popupIcon = (
    <Icon name="down" width={POPUP_ICON_SIZE} height={POPUP_ICON_SIZE} />
  );

  const clearIcon = (
    <Icon name="close" width={CLEAR_ICON_SIZE} height={CLEAR_ICON_SIZE} />
  );

  const helperContainer = helperText ? (
    <div className={helperTextClasses}>
      <Icon
        name={helperIcon}
        width={HELPER_ICON_SIZE}
        height={HELPER_ICON_SIZE}
        style={{
          marginRight: HELPER_ICON_DEFAULT_MARGIN,
          padding: HELPER_ICON_DEAFULT_PADDING,
          color: disabled
            ? HELPER_ICON_DISABLED_COLOR
            : HELPER_ICON_DEFAULT_COLOR,
        }}
      />
      <div className={styles.helperText}>{helperText}</div>
    </div>
  ) : null;

  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        id={id}
        value={val}
        size={'small' as MuiSize}
        freeSolo={false}
        options={options}
        disabled={disabled}
        tabIndex={tabIndex}
        inputValue={inputVal}
        onChange={handleChange}
        onInputChange={handleInputChange}
        getOptionLabel={getOptionLabel}
        noOptionsText={noOptionsText}
        isOptionEqualToValue={isOptionEqualToValue}
        popupIcon={popupIcon}
        clearIcon={clearIcon}
        renderInput={(params: AutocompleteRenderInputParams) => (
          <div className={styles.inputContainer}>
            <TextField
              {...params}
              label={label}
              error={error}
              placeholder={placeholder}
              helperText={helperContainer}
            />
          </div>
        )}
      />
      <input type="hidden" name={name} value={inputVal} />
    </ThemeProvider>
  );
};
export default TebAutoComplete; 

