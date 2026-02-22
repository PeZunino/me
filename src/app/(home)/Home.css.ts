import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme/default.css';


export const home = style({
	maxWidth: '1280px',
	margin:'0 auto',
	display: 'flex',
	padding: '0rem 3rem',
	'@media': {
		'(max-width: 900px)': {
			flexDirection: 'column',
			padding: '0rem 6rem',

		}
	},
});


globalStyle(`${home} >*`,{paddingTop:'6rem',});



globalStyle(`${home} main`,{
	width: '60%',
	'@media': {'(max-width: 900px)': {	width: '100%'}},

});



export const home__resumeLink = style({':hover': {color: vars.color.yellow500}});

