import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root',{
	color: {
		text: '#d6dfee',
		background: '#1b1b1b',
		hover:'#d4a418'
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