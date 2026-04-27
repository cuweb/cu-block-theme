const wpPlugin = require('@wordpress/eslint-plugin');

module.exports = [
	{
		ignores: ['assets/**', 'node_modules/**', 'vendor/**'],
	},
	...wpPlugin.configs.recommended,
];
