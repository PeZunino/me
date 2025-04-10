'use client';

import TextButton from '@/styles/components/BlurTextButton/BlurTextButton';

import {  section } from './styles.css';

export default function Home() {
  return (
    <section className={section}>

      <div>
        <p>Olá! Me chamo </p>

        <TextButton triggerTextContent='Pedro Zunino'>
          <span>. Minha trajetória inicia com RPA, automação de processos e coleta de
             informações, mas sou apaixonado por tudo que envolvendo </span>
        </TextButton>
        
        <TextButton triggerTextContent='WEB'>
          <span>. Nos últimos anos tive contato com diversas tecnologias de low-code à 
            high-code e fiquei aficionado pelo desenvolvimento de sass e sites com </span>
        </TextButton>
 
        <TextButton triggerTextContent='JAVASCRIPT'>
          <span>. Estou expondo aqui  o que pude explorar até agora sobre Next e Nest e
            quem sabe compartilhar aprendizados sobre </span>
        </TextButton>

        <TextButton triggerTextContent='BOAS PRÁTICAS'>
          <span> como DDD e TDD, tópicos como SDLC, patterns e arquiteturas.</span>
        </TextButton>
  
      </div>

    </section>
  );
}
