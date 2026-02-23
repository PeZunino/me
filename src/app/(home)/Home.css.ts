import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme/default.css';


export const homeContentContainer = style({
	padding: '0 8rem 0 10rem',
	display: 'flex',
	justifyContent: 'space-between',

	'@media': {
		'(max-width: 900px)': {
			flexDirection: 'column',
			padding: '0rem 6rem',

		}
	},
});

export const leftSideContent = style({
	flex: '0 0 20rem',
  alignSelf: 'flex-start',
	position: 'sticky',
	top: '6rem',
})

export const rightContent = style({
	paddingTop: '6rem',
  maxWidth: '40rem',
  flex: '1',
})
export const homePresentationText = style({
	marginBottom:'2rem',
	lineHeight: '1.625',
	color:vars.color.gray,
	'@media': {
		'(max-width: 900px)': {
			marginBottom: '8rem',
			marginTop: '10rem'
		}
	},

});

export const home__resumeLink = style({':hover': {color: vars.color.yellow500}});

