'use client';

import TextButton from '@/styles/components/BlurTextButton';
import {  section } from './styles.css';

export default function Home() {
  return (
    <section className={section}>

      <div>
        <p>Olá! Me chamo </p>
        {TextButton({
          triggerTextContent:'Pedro Zunino',
          textContent: ". Minha trajetória inicia com RPA, automação de processos e coleta de informações, mas sou apaixonado por tudo que envolvendo "
        })}
      
        
        {TextButton({
          triggerTextContent:'WEB',
          textContent: ". Nos últimos anos tive contato com diversas tecnologias de low-code à high-code e fiquei aficionado pelo desenvolvimento de sass e sites com "
        })}
        
        {TextButton({
          triggerTextContent:'JAVASCRIPT',
          textContent: ". Estou expondo aqui  o que pude explorar até agora sobre  Next e Nest e "  
        })}
        
        {TextButton({
          triggerTextContent:'METODOLOGIAS',
          textContent: ' como ddd e tdd e quem sabe abordar outros tópicos de SDLC, patterns e arquiteturas.'  
        })}
        
  
      </div>

    </section>
  );
}
