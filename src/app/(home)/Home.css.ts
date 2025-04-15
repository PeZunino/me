import { globalStyle, style } from '@vanilla-extract/css';

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
