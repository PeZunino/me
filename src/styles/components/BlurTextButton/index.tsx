'use client';
import { useState } from "react"
import { blur, container,visible } from "./styles.css"

interface BlurTextButtonProps{
  triggerTextContent: string
  textContent:string
}

export default function BlurTextButton({textContent,triggerTextContent}:BlurTextButtonProps){
  const [hasBlur, setHasBlur] = useState(true)
  
  function unBlur(){
    setHasBlur(!hasBlur)
  }

  return(
    <>
      <div className={container} onClick={unBlur}>
        {triggerTextContent}
      </div>
      <p className={hasBlur ? blur : visible}>
        {textContent}
      </p>
    </>
  )
}