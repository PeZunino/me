import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme/default.css';


export const homeContentContainer = style({
	padding: '0 8rem 0 10rem',
	display: 'flex',
	justifyContent: 'space-between',

	minWidth: '595px',
	'@media': {'(max-width: 1308px)': {flexDirection: 'column',}},
});

export const leftSideContent = style({
	flex: '0 0 20rem',
	alignSelf: 'flex-start',
	position: 'sticky',
	top: '6rem',

	
	'@media': {'(max-width: 1308px)': {position: 'relative',}}

});

export const rightContent = style({
	paddingTop: '6rem',
	maxWidth: '40rem',
	flex: '1',

	'@media': {
		'(max-width: 1308px)': {
			maxWidth: 'none',
			paddingTop: '2rem',
		}
	}
});

export const homePresentationText = style({
	marginBottom:'2rem',
	lineHeight: '1.625',
	color:vars.color.gray,
	'@media': {'(max-width: 1308px)': {marginBottom: '8rem',}},

});

export const home__resumeLink = style({':hover': {color: vars.color.yellow500}});

