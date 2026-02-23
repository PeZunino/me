import { vars } from "@/styles/theme/default.css";
import { style } from "@vanilla-extract/css";

export const link = style({
  cursor:'pointer',
  color: vars.color.gray,      
  selectors:{
    '&:hover':{
      color:vars.color.white
    }
  }
}) 