import Button, { ButtonProps } from '@mui/material/Button';
import React, { FC } from 'react';
import './comboBox.scss';

type IHeaderProps = ButtonProps & {
  label: string;
}

export  const Header: FC<IHeaderProps> = ({label = "Pick An Item", ...rest})=> {
  return (
    <Button className='header' {...rest}>{label}</Button>
  );
}
