import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme/default.css';

export const revealContainer = style({
  borderWidth: '2px',
  borderStyle: "solid",
  borderColor: vars.color.text,
  fontSize: '1.6rem',
  display: 'inline-block',
  borderRadius: "50px 50px",
  padding: "0px 10px",
  fontWeight: "bold",
  cursor: "pointer"
});

export const blur = style({
  filter: 'blur(5px)',
  transition: 'filter 0.3s ease',
  userSelect: 'none',
});

export const revealed = style({
  filter: 'none',
  userSelect: 'text',
  transition: 'filter 0.3s ease',

});