const { resolve } = require('path');

module.exports = {
	extends: require('@address.me/eslint'),
	settings: {
		'import/resolver': {
			alias: {
				map: [['~', resolve(__dirname, 'src')]],
				extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
			},
		},
	},
};
