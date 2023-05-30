/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			white: '#FFFFFF',
			'primary-d1': '#1972A3',
			'primary-l2': '#5CA4CD',
			'gray-l2': '#CCCCCC',
			'gray-l4': '#F5F5F5',
			accent: '#FF6340',
			'accent-d1': '#E05C3E',
		},
		extend: {},
	},
	plugins: [],
};
