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
				<h2>Desenvolvedor fullstack</h2>
				<div>
				</div>
			</aside>

			<main className={mainContent}>
				<section className={section}>
					Sou{' '}
					<Reveal label="DESENVOLVEDOR">
						{' '}para me apresentar posso dizer que comecei com{' '}
						<Reveal dependsOnLabel='DESENVOLVEDOR' label='RPA'>
							{' '}automatizando processos e coletas de dados de portais públicos e privados
						</Reveal>

						{' '}momento que conheci{' '}
						<Reveal dependsOnLabel='DESENVOLVEDOR' label="JAVASCRIPT / TYPESCRIPT" >
							, utilizando Node, jQuery, fazendo integrações de APIs, me interessei cada vez mais por web até cair de cabeça em stacks como{' '}
						</Reveal>
					</Reveal>

					<Reveal label="NEST/NEXT/EXPO">
						{' '}foi aí que descobri meu lugar: criando do zero, colaborando com ideias,
					</Reveal>
					pensando em arquitetura e{' '}
					<Reveal label='BOAS PRÁTICAS'>
						{' '}conhecendo mais sobre SDLC, arquitetura, patterns e abordagens como{' '}
						<Reveal dependsOnLabel='BOAS PRÁTICAS' label="TDD / DDD">
							{' '}explorando formas de construir software com mais intenção, clareza e escala. Ainda tô absorvendo bastante coisa{' '}
						</Reveal>
						<Reveal dependsOnLabel='BOAS PRÁTICAS' label="EM BREVE">, talvez compartilhe por aqui o que ando aprendendo.
							<br />
						</Reveal>
					</Reveal>

					Moro em{' '}
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
