import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme/default.css';


export const home = style({
	maxWidth: '1280px',
	margin:'0 auto',
	display: 'flex',
	padding: '0rem 3rem',
	'@media': {'(max-width: 900px)': {flexDirection: 'column'}},
});


globalStyle(`${home} >*`,{paddingTop:'6rem',});

export const home__header = style({
	flex:'1',
	height: 'fit-content',
	position: 'sticky',
	top: '0',
	'@media': {'(max-width: 900px)': {	position: 'inherit'}},

});


globalStyle(`${home__header} h1`,{width: 'max-content',});

globalStyle(`${home} main`,{
	width: '60%',
	'@media': {'(max-width: 900px)': {	width: '100%'}},

});

export const home__presentation_text = style({
	marginBottom:'2rem',
	lineHeight: '1.625',
	color:vars.color.gray
});

globalStyle(`${home__presentation_text} p`,{display: 'inline',});

globalStyle(`${home} main section`,{});

export const home__resumeLink = style({':hover': {color: vars.color.yellow500}});

