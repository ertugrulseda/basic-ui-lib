import React from 'react';
import Button from '@mui/material/Button';
import { TebButtonProps } from '../../utils/props';

const TebButton = ({ variant = "contained", label, onClick, ...restProps }: TebButtonProps) => {
	return (
		<Button variant={variant} onClick={onClick} {...restProps}>{label}</Button>
	);
}

export default TebButton;



