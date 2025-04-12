import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme/default.css';

export const revealContainer = style({
	padding: '0px 10px',
	backgroundColor: 'transparent',
	
	borderWidth: '2px',
	borderStyle: 'solid',
	borderColor: vars.color.text,
	borderRadius: '50px 50px',
	
	cursor: 'pointer',
	display: 'inline-block',
	
	color: vars.color.text,
	fontSize: '1.6rem',
	fontWeight: 'bold',
	
	selectors: {'&:disabled': {cursor: 'default',},},
});

export const revealButton = styleVariants({
	blurred: {
		filter: 'blur(5px)',
		transition: 'filter 0.3s ease',
		userSelect: 'none',
	},
	revealed: {
		filter: 'none',
		userSelect: 'text',
		transition: 'filter 0.3s ease',
	},
});

