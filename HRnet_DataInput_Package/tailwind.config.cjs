module.exports = {
	content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
	theme: {
		extend: {},
	},
	plugins: [require('tailwindcss'), require('autoprefixer')],
}

