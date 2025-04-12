import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root',{
	color: {
		text: '#ababad',
		hover:'#d4a418'
	},
	font: {
		geistMono: '"Manrope-mono", var(font-manrope-mono), monospace',
		size:{
			sm: '1rem',
			md: '2.5rem',
			lg: '4rem',
		},
		weight:{md: '400'}
	},
	spacing: {
		xs: '0.25rem',
		sm: '0.5rem',
		md: '1rem',
		lg: '2rem',
	},
});