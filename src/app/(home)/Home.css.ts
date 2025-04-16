import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme/default.css';

export const layoutContainer = style({

	height: '100vh',

	position: 'absolute',
	overflow: 'hidden',
	
});

export const asideContent = style({
	paddingTop: '6rem',
	paddingLeft: '4rem',

	position: 'relative',
	float: 'left'

});

globalStyle(`${asideContent} h1`,{lineHeight: 1});

export const mainContent = style({
	width:'60%',
	height: '100%',
	paddingTop: '6rem',
	paddingRight: '4rem',
	paddingLeft:'6rem',
	position: 'relative',
	overflow:'scroll',
	float: 'right',

});

export const section = style({
	marginBottom: '5rem',
	lineHeight: '1.5rem',
	paddingLeft: '1rem',
	'@media': {
		'screen and (max-width: 1024px)': {
			padding: '1rem 3rem',
			fontSize:'0.7rem',
			lineHeight: '1.5rem'
		},
	}
});

export const cardList = style({});

export const cardDimmedOnHover = style({selectors: {[`${cardList}:hover &:not(:hover)`]: {opacity: '0.5',},},});

export const cardHighlighted = style({
	':hover': {
		opacity: '1 !important',
		transform: 'scale(1.02)',
	},
});

export const hoverYellow = style({':hover':{color: vars.color.yellow500}});

globalStyle('.card',{
	transition: 'opacity 0.3s ease, transform 0.2s ease',
	opacity: '1', // Opacidade padrão
});