'use client';

import Reveal from '@/components/Reveal/Reveal';
import { section } from './Home.css';

export default function Home() {
	return (
		<div className={section}>
			<p>
				<span style={{ display: 'inline' }}>Opa! Me chamo{' '}</span>
				<Reveal label='PEDRO ZUNINO'>
					{' '}sou{' '}
					<Reveal dependsOnLabel='PEDRO ZUNINO' label="DESENVOLVEDOR FULL STACK">
						{' '}Para me apresentar preciso dizer que comecei automatizando processos e construindo{' '}
						<Reveal dependsOnLabel='DESENVOLVEDOR FULL STACK' label="BOTS">{' '}com Node e jQuery, assim descobri desenvolvimento {' '}</Reveal>
					</Reveal>
				</Reveal>
				<Reveal label="WEB">{' '}e tudo começou a fazer mais sentido,
					{' '}fui de soluções low-code como Mendix até algumas experiências com{' '}
					<Reveal dependsOnLabel='WEB' label='TYPESCRIPT/ REACT/ REACT NATIVE'>{' '}até cair de cabeça em stacks como{' '}</Reveal>

				</Reveal>
				<Reveal label="NEST / NEXT"> {' '}foi aí que descobri meu lugar: criando produtos do zero, colaborando com ideias, pensando em{' '}</Reveal>
				<Reveal label="ARQUITETURA">
					{' '}e boas práticas. Hoje, tenho me aprofundado em conceitos como{' '}

					<Reveal dependsOnLabel='ARQUITETURA' label="TDD / DDD">{' '}conhecendo mais sobre{' '}</Reveal>
					<Reveal dependsOnLabel='ARQUITETURA' label="SDLC / PATTERNS">{' '}explorando formas de construir software com mais intenção, clareza e escala. Ainda tô absorvendo bastante coisa{' '}
						<Reveal dependsOnLabel="SDLC / PATTERNS" label="EM BREVE">, talvez compartilhe por aqui o que ando aprendendo. Moro em </Reveal>
					</Reveal>
				</Reveal>
				<Reveal label="ITAJAÍ">
					, Santa Catarina. Você pode me achar no{' '}
					<Reveal dependsOnLabel='ITAJAÍ' label="GITHUB">{' '} ou LinkedIn</Reveal>
				</Reveal>
			</p>
		</div >
	);
}
