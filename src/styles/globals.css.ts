import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme/default.css';

globalStyle('body::before', {
  content: '',
  position: 'fixed',
  inset: 0,
	zIndex: 0,
  pointerEvents: 'none',
  background: `
    radial-gradient(
      600px circle at var(--x) var(--y),
      rgba(212, 164, 24, 0.06),
      transparent 60%
    )
  `,
});
globalStyle('html', {
  fontSize: '16px',
  '@media': {
    '(max-width: 900px)': {
      fontSize: '14px',
    },
  },
});

 

globalStyle('body', {
  color: vars.color.white,
	backgroundColor: vars.color.black,
  
	position: 'relative',
  zIndex: 1,

	fontFamily: vars.font.family.manrope,
  fontWeight: vars.font.weight.md,
});

globalStyle('h1',{
	fontSize: vars.font.size.xxl,
	fontWeight: vars.font.weight.xl,
	color: vars.color.white,
	'@media': {'(max-width: 900px)': {fontSize: '36px'}},
});

globalStyle('h2',{
	fontSize: vars.font.size.lg,
	fontWeight: vars.font.weight.lg,
	'@media': {'(max-width: 900px)': {fontSize: '18px'}},

});

globalStyle('p',{
	fontSize: vars.font.size.md,
	marginBottom: '1rem',
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

globalStyle('a:focus', {outline: 'none',});

globalStyle('a:focus-visible', {color: 'inherit',});

globalStyle('body, input, textarea, button',{fontFamily: vars.font.family.manrope});

globalStyle('*',{
	margin: 0,
	padding: 0,
	boxSizing: 'border-box'
});

