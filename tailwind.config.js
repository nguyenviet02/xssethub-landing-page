/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
	darkMode: ["class"],
	content: {
		files: [
			"./index.html",
			"./src/*.{js,ts,jsx,tsx}",
			"./src/**/*.{js,ts,jsx,tsx}",

		],
		extract,
	},
	theme: {
		screens,
		fontSize,
		extend: {
			screens: {
				"mobile": "23.5rem",
				"desktop": "90rem"
			},
			fontSize: {
				"2xl": ["1.5rem", "2.125rem"],
				"5xl": ["3rem", "4.5rem"],
			},
			colors: {
				'primary': '#7916F3',
				'primary-background': 'linear-gradient(90deg,#FFFFFF 0%,#FFECFB 100%)',
				'primary-text': '#280936'
			},
			maxWidth: {
				"1440": "1440px"
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'inter': ["Inter", 'sans-serif']
			},
		},
		/** @type {import('fluid-tailwind').FluidThemeConfig} */
		fluid: ({ theme }) => ({
			defaultScreens: [theme('screens.mobile'), theme('screens.desktop')]
		})
	},
	plugins: [
		fluid({
			checkSC144: false // default: true
		}),
		require("tailwindcss-animate")
	],
}