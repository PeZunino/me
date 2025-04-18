import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme/default.css';


globalStyle('body', {
	color: vars.color.white,
	backgroundColor:vars.color.black,
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

globalStyle('a', {
	color: 'inherit',
	textDecoration: 'none',
});

globalStyle('a:hover', {textDecoration: 'none',});

globalStyle('a:visited', {color: 'inherit',});

globalStyle('a:focus', {outline: 'none',});

globalStyle('a:focus-visible', {color: 'inherit',});

globalStyle('body, input, textarea, button',{fontFamily: vars.font.family.manrope});

globalStyle('*',{
	margin: 0,
	padding: 0,
	boxSizing: 'border-box'
});