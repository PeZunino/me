import { AnchorHTMLAttributes, ReactNode } from "react";
import { link } from "./Link.css";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
  children: ReactNode
}
export default function Link({children,...props}:LinkProps){
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={link}
      {...props}
    >
    {children}
    </a>
  )
}