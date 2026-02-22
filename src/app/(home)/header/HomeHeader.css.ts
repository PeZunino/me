import { vars } from "@/styles/theme/default.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const home__header = style({
	flex:'1',
	height: '100vh',

	position: 'sticky',
	top: '0',

	'@media': {'(max-width: 900px)': {	position: 'inherit'}},

});

globalStyle(`${home__header} h1`,{
	width: 'max-content',
	lineHeight: '1'
});

globalStyle(`${home__header} h2`,{
	marginTop: '0.75rem',
	marginBottom: '1rem',
	'@media': {
		'(max-width: 900px)': {
			marginTop: '2rem',
			marginBottom: '3rem',
		}
	},

});

globalStyle(`${home__header} P`,{
	width: '60%',
	marginBottom: '3rem',
	color: vars.color.gray,
	'@media': {'(max-width: 900px)': { width: '90%',}},

});


globalStyle(`${home__header} div`,{
	display: 'flex',
	gap:'1.25rem',
	'@media': {
		'(max-width: 900px)': {
			marginTop:'3rem',
			gap:'5rem',

		}
	},

});

globalStyle(`${home__header} svg`,{
	color: vars.color.gray,
	cursor:'pointer'
});

globalStyle(`${home__header} svg:hover`,{color: vars.color.white});
