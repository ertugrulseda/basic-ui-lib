module.exports = {
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true)
		}
	},
	stories: [ '../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)' ],
	addons: [
		'@storybook/preset-scss',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-knobs'
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5'
	}
};
