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
		extend: {
			screens: {
				xs: '360px',
				sm: '480px',
				md: '768px',
				lg: '976px',
				xl: '1440px',
			},
			minWidth: {
				8: '8rem',
				10: '10rem',
			},
			minHeight: {
				1: '22px',
				2: '2.25rem',
				3: '3rem',
			},
			height: {
				1000: '65rem',
				450: '47rem',
				690: '43.5rem',
				580: '41rem',
				550: '550px',
				143: '143px',
				136: '136px',
				50: '50px',
				35: '35px',
			},
			width: {
				0.3: '0.3px',
				0.53: '5.3rem',
				0.57: '5.7rem',
				57: '57px',
				88: '88px',
				98: '98px',
				108: '108px',
				305: '305px',
				335: '21rem',
				350: '21.9rem',
				430: '27rem',
				406: '25.5rem',
				560: '35rem',
				600: '37.5rem',
			},
			colors: {
				'elr-black': '#081120',
				'elr-yellow': '#fccd33',
				'elr-green': '#054853',
				'elr-white': '#f3fffd',
				'elr-purple': '#5a4af2',
				'elr-gray': '#f7f7f7',
				'elr-gray-400': '#999',
				'elr-gray-500': '#F5F5F5',
				'elr-gray-600': '#C4C4C4',
				'elr-white-400': '#fff',
				'elr-purple-500': '#151f2f',
				white: '#fff',
			},
			gridTemplateColumns: {
				'auto-fill': 'repeat(auto-fill, minmax(14rem, 1fr))',
				'medium-auto-fill': 'repeat(auto-fill, minmax(11rem, 1fr))',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
