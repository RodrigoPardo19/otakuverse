import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/modules/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/shared/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				'bg-secondary': '#252525',
				foreground: 'var(--foreground)',
				primary: '#ed1c1a',
				secondary: 'black',
				border: '#444c56'
			},
			animation: {
				'infinite-scroll': 'infinite-scroll 20s linear infinite'
			},
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' }
				}
			}
		}
	},
	plugins: []
};
export default config;
