/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
	],
	theme: {
		extend: {
			fontFamily: {
				caveat: ['Caveat', 'cursive'],
				'open-sans': ['Open Sans', 'sans-serif'],
			},
			colors: {
				'meat-black': '#24272A',
				'meat-gray': '#3F454A',
				'meat-yellow': '#D8AD3D',
				'meat-blue': '#009CD9',
				'meat-red': '#B72C2C',
			},
		},
	},
	plugins: [],
}
