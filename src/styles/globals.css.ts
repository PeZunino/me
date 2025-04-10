import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme/default.css';


globalStyle('body', {
  color: vars.color.text,
  backgroundImage: 'url(/45-degree-fabric-dark.png)',
  backgroundColor: "#161616",
  fontFamily: vars.font.playFair,
  fontWeight: vars.font.weight.md,
  fontSize: '16px',
});

globalStyle("body, input, textarea, button",{
  fontFamily: 'inherit'
})

globalStyle("*",{
  margin: 0,
  padding: 0,
  boxSizing: 'border-box'
})