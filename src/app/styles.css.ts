import {  globalStyle, style } from '@vanilla-extract/css';


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
  fontSize: '2rem',

});

export const blur = style({
  // filter: 'blur(5px)',
  // position: 'absolute'
});

export const triggerWord = style({
  // filter: 'none',
  // position: 'relative',
  // fontWeight: "bold"
});

globalStyle(`${section} span `, {
  // width: '100%',
  // backgroundColor: "red"
  marginBottom:"10px"
});