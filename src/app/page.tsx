'use client';

import Reveal from '@/styles/components/BlurTextButton/BlurTextButton';
import { section } from './styles.css';

// import {  blur,section,triggerWord } from './styles.css';

export default function Home() {
	return (
		<div className={section}>
			<p>Opa! Eu sou o Pedro Zunino.</p>
			<p>
				Sou <Reveal label="DESENVOLVEDOR WEB">comecei automatizando processos e construindo </Reveal>
				<Reveal label="BOTS"> que vasculhavam portais públicos e privados atrás de dados valiosos. Com o tempo, fui descobrindo o quanto gostava do mundo do desenvolvimento </Reveal>
				<Reveal label="WEB"> e foi aí que tudo começou a fazer ainda mais sentido. Nos últimos anos, fui de soluções low-code como </Reveal>
     
				<Reveal label="MENDIX"> até cair de cabeça em stacks como </Reveal>
				<Reveal label="REACT / NODE / NEST / NEXT">  E foi aí que descobri meu lugar: criando produtos do zero, colaborando com ideias, pensando em </Reveal>
				<Reveal label="ARQUITETURA"> boas práticas e escrevendo código que dá orgulho de revisitar. Hoje, tenho me aprofundado em boas práticas como </Reveal>
   
				<Reveal label="TDD / DDD"> conhecendo mais sobre </Reveal>
				<Reveal label="SDLC / PATTERNS"> explorando formas de construir software com mais intenção, clareza e escala. Ainda tô absorvendo bastante coisa </Reveal>
				<Reveal label="EM BREVE">, talvez compartilhe por aqui o que ando aprendendo. Moro em </Reveal>
				<Reveal label="ITAJAÍ">, Santa Catarina. Você me achar no</Reveal>
				<Reveal label="GitHub"> PeZunino, ou LinkedIn</Reveal>
			</p>
		</div>
	);
}
