import { vars } from "@/styles/theme/default.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const home__presentation_text = style({
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

globalStyle(`${home__presentation_text} p`,{display: 'inline',});