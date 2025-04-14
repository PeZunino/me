import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme/default.css';

export const layoutContainer = style({
	height: '100vh',
	padding: '6rem 3rem',
	
	display: 'flex',
	color: vars.color.text,
	
	backgroundColor:vars.color.background,

	
});

export const asideContent = style({
	flex:1,
	border: 'solid blue 2px'
});

export const mainContent = style({
	width:'37.5rem',
	border: 'solid red 2px'
});

export const section = style({

	'@media': {
		'screen and (max-width: 1024px)': {
			padding: '1rem 3rem',
			fontSize:'0.7rem',
			lineHeight: '1.5rem'
		},
	}
});
