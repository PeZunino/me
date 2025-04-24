import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme/default.css';


export const home = style({
	maxWidth: '1280px',
	margin:'0 auto',
	display: 'flex',
});


globalStyle(`${home} >*`,{paddingTop:'6rem',});

export const home__header = style({
	flex:'1',
	height: 'fit-content',
	position: 'sticky',
	top: '0',
});


globalStyle(`${home__header} h1`,{width: 'max-content',});

globalStyle(`${home} main`,{width: '60%',});

globalStyle(`${home} main section`,{marginBottom:'2rem',});

export const home__resumeLink = style({':hover': {color: vars.color.yellow500}});

