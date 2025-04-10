'use client';
import { ReactNode, useState } from "react";

import { blur, container,trigger,visible } from "./BlurTextButton.css";

interface BlurTextButtonProps{
  triggerTextContent: string
  children:ReactNode
}

export default function BlurTextButton({children,triggerTextContent}:BlurTextButtonProps){
  const [ hasBlur, setHasBlur ] = useState(true);
 
  function unBlur(){
    setHasBlur(!hasBlur);
  }

  return(
    <div className={container}>

      <p className={trigger} onClick={unBlur}>
        {triggerTextContent}
      </p>
     
      <p className={hasBlur ? blur : visible}>
        {children}
      </p>
  
    </div> 
  );
}