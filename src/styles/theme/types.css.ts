import { createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    text: null,
  },
  font: {
    playFair: null,
    size:{
      md: null
    },
    weight:{
      md: null
    }
  },
  spacing: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
  },
});
