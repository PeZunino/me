import { style } from "@vanilla-extract/css";
import { vars } from '@/styles/theme/default.css';

export const container = style({
  borderWidth: '2px',
  borderStyle: "solid",
  borderColor: vars.color.text,
  fontSize: vars.font.size.md,
  display: 'inline-block',
  borderRadius: "50px 50px",
  padding: "0px 10px",
  fontWeight: "bold",
  cursor: "pointer"
})

export const visible = style({
  filter: 'blur(0)',
  transition: 'filter 0.2s ease-in-out',
})

export const blur = style({
  filter: 'blur(5px)',
  transition: 'filter 0.2s ease-in-out',
  cursor: "help"
})