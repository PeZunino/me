import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme/default.css';

export const revealButtonContainer = style({
	padding: '0px 5px',
	backgroundColor: 'transparent',
	
	borderWidth: '1px',
	borderStyle: 'solid',
	borderColor: vars.color.white,
	borderRadius: '50px 50px',
	
	cursor: 'pointer',

	color: vars.color.white,

	selectors: {
		'&:disabled': {cursor: 'default',},
		'&:not(:disabled):hover': {
			backgroundColor: vars.color.yellow500,
			color: vars.color.black,
			borderColor: vars.color.yellow500,
		},	
	},
});

export const revealContent = style({
	display: 'inline',
	color: vars.color.gray,
});

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


