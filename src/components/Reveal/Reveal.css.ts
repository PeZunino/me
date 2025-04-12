import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme/default.css';

export const revealContainer = style({
	padding: '0px 5px',
	backgroundColor: 'transparent',
	
	borderWidth: '1px',
	borderStyle: 'solid',
	borderColor: vars.color.text,
	borderRadius: '50px 50px',
	
	cursor: 'help',
	display: 'inline-block',
	
	color: vars.color.text,
	fontSize: '1.2rem',
	fontWeight: 'bold',
	'@media': {
		'screen and (max-width: 1024px)': {fontSize:'0.4rem'},
		// 'screen and (max-width: 768px)': {padding: '2rem 5rem',},
		// 'screen and (max-width: 480px)': {
		// 	padding: '1.5rem 2rem', 
		// 	fontSize: '1.5rem',
		// 	lineHeight: '2rem'
		// }
	},
	selectors: {
		'&:disabled': {cursor: 'default',},
		'&:not(:disabled):hover': {
			backgroundColor: vars.color.hover,
			color: '#1c1c1c',
			borderColor: vars.color.hover,
		},	
	},
});

export const revealButton = styleVariants({
	blurred: {
		filter: 'blur(12px)',
		transition: 'filter 0.3s ease',
		userSelect: 'none',
	},
	revealed: {
		filter: 'none',
		userSelect: 'text',
		transition: 'filter 0.3s ease',
	},
});

