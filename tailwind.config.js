module.exports = {
	purge: {
		mode: 'layers',
		content: [
			'src/**/*.js',
			'src/**/*.jsx',
			'src/**/*.ts',
			'src/**/*.tsx',
			'public/**/*.html',
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
