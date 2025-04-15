import { globalStyle, style } from '@vanilla-extract/css';

export const layoutContainer = style({

	overflow: 'hidden',
	height: '100vh',
	position: 'absolute'
	
});

export const asideContent = style({
	// flex:1,
	paddingTop: '5rem',
	paddingLeft: '3rem',
	// border: 'solid blue 2px',
	position: 'relative',
	float: 'left'
});

globalStyle(`${asideContent} h1`,{lineHeight: 1});

export const mainContent = style({
	width:'60%',
	// border: 'solid red 2px',
	position: 'relative',
	float: 'right',
	overflow:'scroll',
	height: '100%',
	paddingTop: '5rem',
	paddingRight: '3rem',
	paddingLeft: '3rem',

});

export const section = style({
	marginBottom: '5rem',
	'@media': {
		'screen and (max-width: 1024px)': {
			padding: '1rem 3rem',
			fontSize:'0.7rem',
			lineHeight: '1.5rem'
		},
	}
});
