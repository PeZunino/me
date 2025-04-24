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

	color: vars.color.gray,
	'@media': {
		'screen and (max-width: 1024px)': {
			padding: '1rem 3rem',
			fontSize:'0.7rem',
			lineHeight: '1.5rem'
		},
	}
});



export const hoverYellow = style({':hover':{color: vars.color.yellow500}});

// globalStyle('.card',{
// 	transition: 'opacity 0.3s ease, transform 0.2s ease',
// 	opacity: '1', // Opacidade padrão
// });



export const cardContainer = style({
	padding: '1rem',
	marginBottom: '2rem',
	
	display:'flex',
	border: '1px solid transparent',
	
	cursor: 'pointer',
	
	transition: 'all 0.2s ease-in-out',
	
	opacity: '1',

	selectors:{
		'&:hover':{
			background: ' rgba(150, 150, 150, 0.1);',
			borderRadius:' 10px',
			border: '1px solid rgba( 255, 255, 255, 0.18 )',
			opacity: '1 !important',
			transform: 'scale(1.02)',
		},
		['.list:hover &:not(:hover)']: {opacity: '0.5',},
		['.list:hover &:hover']: {color: vars.color.yellow500,},

	},

});


export const cardTimeContainer = style({
	width:'25%',
	fontWeight:'bold',
	color: vars.color.gray,
	marginTop: '0.25rem'

});