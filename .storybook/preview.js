import React from 'react';
import { TebThemeProvider } from '../src/components';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
};


export const decorators = [
	(Story) => (
		<TebThemeProvider>
			<Story />
		</TebThemeProvider>
	)
];
