import {  globalStyle, style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme/default.css';

export const section = style({
  padding: '2rem 20rem',
  height: '100vh',

  display: 'flex',
  gap: '3rem',
  flexFlow: "column",
  alignItems: 'center',

  backgroundImage: 'url(/45-degree-fabric-dark.png)',
  backgroundColor: "#161616",

  textAlign:'center',
  lineHeight: "120%",
  fontSize: vars.font.size.md,

});


globalStyle(`${section} div p`, {
  display: 'inline'
});