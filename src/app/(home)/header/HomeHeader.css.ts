import { vars } from "@/styles/theme/default.css";
import { globalStyle, style } from "@vanilla-extract/css";


export const subtitle = style({
	marginBottom: '3rem',
	color: vars.color.gray,
});


export const linksContainer = style({
	
  display: 'flex',
	gap:'1.25rem',

	'@media': {
		'(max-width: 900px)': {
			marginTop:'3rem',
			gap:'5rem',

		}
	},

});


