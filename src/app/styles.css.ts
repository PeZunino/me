import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme/default.css';

export const heading = style({
  fontSize: vars.font.size.lg,
  fontWeight: 'bold',
});
