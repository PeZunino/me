import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme/default.css';


globalStyle('body', {
	color: vars.color.text,

	fontFamily: vars.font.geistMono,
	fontWeight: vars.font.weight.md,
	fontSize: '16px',
});

globalStyle('body, input, textarea, button',{fontFamily: vars.font.geistMono});

globalStyle('*',{
	margin: 0,
	padding: 0,
	boxSizing: 'border-box'
});