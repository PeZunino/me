import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme/default.css';

globalStyle('html', {
	fontSize: '16px',
	'@media': {'(max-width: 900px)': {fontSize: '4px'}},
});

globalStyle('body', {
	color: vars.color.white,
	backgroundColor:vars.color.black,
	fontFamily: vars.font.family.manrope,
	fontWeight: vars.font.weight.md,
});

globalStyle('h1',{
	fontSize: vars.font.size.xxl,
	fontWeight: vars.font.weight.xl,
	'@media': {'(max-width: 900px)': {fontSize: '36px'}},
});

globalStyle('h2',{
	fontSize: vars.font.size.lg,
	fontWeight: vars.font.weight.lg,
	'@media': {'(max-width: 900px)': {fontSize: '18px'}},

});

globalStyle('p',{
	fontSize: vars.font.size.md,
	'@media': {'(max-width: 900px)': {fontSize: '16px'}},
});

globalStyle('span',{
	fontSize: vars.font.size.sm,
	'@media': {'(max-width: 900px)': {fontSize: '12px'}},

});

globalStyle('a', {
	color: 'inherit',
	textDecoration: 'none',
	'@media': {'(max-width: 900px)': {fontSize: '16px'}},

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

