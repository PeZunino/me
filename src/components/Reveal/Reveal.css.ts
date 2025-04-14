import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme/default.css';

export const revealButtonContainer = style({
	padding: '0px 5px',
	backgroundColor: 'transparent',
	
	borderWidth: '1px',
	borderStyle: 'solid',
	borderColor: vars.color.text,
	borderRadius: '50px 50px',
	
	cursor: 'pointer',
	
	color: vars.color.text,
	
	selectors: {
		'&:disabled': {cursor: 'default',},
		'&:not(:disabled):hover': {
			backgroundColor: vars.color.hover,
			color: vars.color.background,
			borderColor: vars.color.hover,
		},	
	},
	'@media': {'screen and (max-width: 1024px)': {fontSize:'0.4rem'},},
});

export const revealContent = style({display: 'inline'});

export const revealContentBlur = style({
	filter: 'blur(5px)',
	transition: 'filter 0.3s ease',
	userSelect: 'none',
	cursor: 'help',
});

export const revealContentRevealed = style({
	filter: 'none',
	userSelect: 'text',
	transition: 'filter 0.3s ease',
});


