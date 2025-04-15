import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme/default.css';


globalStyle('body', {
	color: vars.color.white,

	fontFamily: vars.font.family.manrope,
	fontWeight: vars.font.weight.md,
	fontSize: '16px',
});

globalStyle('h1',{
	fontSize: vars.font.size.xxl,
	fontWeight: vars.font.weight.xl
});

globalStyle('h2',{
	fontSize: vars.font.size.lg,
	fontWeight: vars.font.weight.lg
});

globalStyle('p',{fontSize: vars.font.size.md});

globalStyle('span',{fontSize: vars.font.size.sm});


globalStyle('body, input, textarea, button',{fontFamily: vars.font.family.manrope});

globalStyle('*',{
	margin: 0,
	padding: 0,
	boxSizing: 'border-box'
});