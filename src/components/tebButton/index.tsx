import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

type Variants = 'contained' | 'outlined'


export interface TebButtonProps extends ButtonProps {
	variant?: Variants,
	label: string,
	onClick: () => void
	//restPropsu buraya yazmaya gerek yok
}

export const TebButton = ({ variant = "contained", label, onClick, color, ...restProps }: TebButtonProps) => {
	return (
		<Button variant={variant} onClick={onClick} color={color} {...restProps}>{label}</Button>
	);
}





