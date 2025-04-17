'use client';

import { MdOutlineArrowOutward } from 'react-icons/md';
import { Card } from '@/components/Card/Card';
import Reveal from '@/components/Reveal/Reveal';
import info from '../../../experiences.json';
import { asideContent, cardList, hoverYellow, layoutContainer, mainContent, section } from './Home.css';


interface ExperienceInfo {
	id: string,
	businessURL: string,
	business: string,
	endDate: string,
	startDate: string,
	description: string,
	title: string,
	skills: string[]
}


export default function Home() {
	const experiences: ExperienceInfo[] = info.experience;

	return (
		<div className={layoutContainer}>
			<aside className={asideContent}>
				<h1>Pedro Zunino</h1>
				<h2>Full Stack Developer</h2>
				<div>
				</div>
			</aside>

			<main className={mainContent}>
				<section className={section}>

					<Reveal label="DESENVOLVEDOR FULL STACK">
						{' '}Para me apresentar preciso dizer que comecei automatizando processos e construindo{' '}
						<Reveal dependsOnLabel='DESENVOLVEDOR FULL STACK' label="BOTS">
							{' '}com Node e jQuery, assim descobri desenvolvimento web e tudo começou a fazer mais sentido.
							<br />
							<br />
							{' '}Fui de soluções low-code como Mendix até algumas experiências com{' '}
							<Reveal dependsOnLabel='BOTS' label='TYPESCRIPT/ REACT/ REACT NATIVE'>{' '}até cair de cabeça em stacks como{' '}</Reveal>
						</Reveal>
					</Reveal>


					<Reveal label="NEST / NEXT">
						{' '}foi aí que descobri meu lugar: criando produtos do zero, colaborando com ideias, pensando em arquitetura e boas práticas.{' '}
						<br />
						<br />
						Hoje, tenho me aprofundado em conceitos como{' '}

					</Reveal>

					<Reveal label="TDD / DDD">
						{' '}conhecendo mais sobre SDLC e patterns explorando formas de construir software com mais intenção, clareza e escala. Ainda tô absorvendo bastante coisa{' '}
						<Reveal dependsOnLabel="TDD / DDD" label="EM BREVE">, talvez compartilhe por aqui o que ando aprendendo.
							<br />
							<br />
							Moro em{' '}
						</Reveal>
					</Reveal>

					<Reveal label="ITAJAÍ">
						, Santa Catarina. Você pode me achar no{' '}
						<Reveal dependsOnLabel='ITAJAÍ' label="GITHUB">{' '} ou LinkedIn</Reveal>
					</Reveal>
				</section >
				<div className={cardList}>
					{experiences.map(({
						business, businessURL, description, endDate, skills, startDate, title, id
					}) => (
						<Card
							key={id}
							businessURL={businessURL}
							business={business}
							endDate={endDate}
							startDate={startDate}
							description={description}
							title={title}
							skills={skills}
						/>
					))}
					<a
						target="_blank"
						rel="noopener noreferrer"
						className={hoverYellow}
						href='/resume.pdf'
						style={{
							fontWeight: 'bold',
							cursor: 'pointer',
							display: 'flex',
							justifyContent: 'right',
							marginBottom: '1rem'
						}}
					>
						Ver currículo{' '}
						<MdOutlineArrowOutward />
					</a>
				</div>

			</main>

		</div >

	);
}
