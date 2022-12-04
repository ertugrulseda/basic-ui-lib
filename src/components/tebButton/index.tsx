import React from 'react';
import './tebbutton.scss';
import Button from '@mui/material/Button';

export const TebButton = ({variant,label}) => {
	return (
		<div className="tebbutton">
			<Button variant={variant}>{label}</Button>
		</div>
	);
};
