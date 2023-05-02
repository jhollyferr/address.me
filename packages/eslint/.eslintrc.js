const { resolve } = require('path');

module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
	],
	parser: '@typescript-eslint/parser',
	overrides: [],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'import', 'prettier'],
	rules: {
		'react/react-in-jsx-scope': 'off',
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
};
