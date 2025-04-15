import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root',{
	color: {
		white: '#d6dfee',
		black: '#1b1b1b',
		gray: '#9ca3af',
		yellow400:'rgba(212, 164, 24, 0.1)',
		yellow500:'#d4a418'
	},
	font: {
		family:{manrope: '"Manrope-mono", var(font-manrope-mono), monospace',},
		size:{
			sm: '0.75rem', //12
			md: '1rem',
			lg: '1.25rem', //20
			// xl: '1.5rem', // 24
			xxl: '3rem', //48
		},
		weight:{
			md: '400',
			lg:'500',
			xl:'700'
		}
	},
	spacing: {
		sm: '0.75rem',
		md: '1rem',
		lg: '1.25rem',
		xlg: '2rem'
	},
});