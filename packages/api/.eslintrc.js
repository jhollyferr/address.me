const { resolve } = require('path');

module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
	],
	parser: '@typescript-eslint/parser',
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'import', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
			},
		],
		'@typescript-eslint/explicit-function-return-type': [
			'error',
			{
				allowTypedFunctionExpressions: true,
			},
		],
		'import/order': [
			'error',
			{
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
				groups: [['builtin', 'external'], 'internal', 'parent', 'sibling'],
				'newlines-between': 'always',
			},
		],
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [['~', resolve(__dirname, 'src')]],
				extensions: ['.ts', '.js', '.json'],
			},
		},
	},
};
