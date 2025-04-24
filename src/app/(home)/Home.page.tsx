'use client';

import { MdOutlineArrowOutward } from 'react-icons/md';
import { Card } from '@/components/Card/Card';
import Reveal from '@/components/Reveal/Reveal';
import info from '../../../experiences.json';
import { home, home__header, home__presentation_text, home__resumeLink } from './Home.css';

interface ExperienceInfo {
	id: string,
	skills: string[],
	title: string,
	description: string,
	business: string,
	endDate: string,
	startDate: string,
	businessURL: string
}


export default function Home() {
	const experiences: ExperienceInfo[] = info.experience;

	return (
		<div>

			<div className={home}>

				<header className={home__header}>
					<h1>Pedro Zunino</h1>
					<h2>Desenvolvedor fullstack</h2>
					<div>
					</div>
				</header>

				<main>
					<section className={home__presentation_text}>
						<p>
							Sou
						</p>
						<Reveal label="DESENVOLVEDOR">
							<p>
								para me apresentar posso dizer que comecei com{' '}
							</p>
							<Reveal dependsOnLabel='DESENVOLVEDOR' label='RPA'>
								<p>
									automatizando processos e coletas de dados de portais públicos e privados
								</p>
							</Reveal>
							<p>
								momento que conheci
							</p>
							<Reveal dependsOnLabel='DESENVOLVEDOR' label="JAVASCRIPT / TYPESCRIPT" >
								<p>
									, utilizando Node, jQuery, fazendo integrações de APIs, me interessei cada vez mais por web até cair de cabeça em stacks como
								</p>
							</Reveal>
						</Reveal>

						<Reveal label="NEST/NEXT/EXPO">
							<p>
								foi aí que descobri meu lugar: criando do zero, colaborando com ideias,
							</p>
						</Reveal>
						<p>
							pensando em arquitetura e
						</p>
						<Reveal label='BOAS PRÁTICAS'>
							<p>
								conhecendo mais sobre SDLC, arquitetura, patterns e abordagens como
							</p>
							<Reveal dependsOnLabel='BOAS PRÁTICAS' label="TDD / DDD">
								<p>
									explorando formas de construir software com mais intenção, clareza e escala. Ainda tô absorvendo bastante coisa
								</p>
							</Reveal>
							<Reveal dependsOnLabel='BOAS PRÁTICAS' label="EM BREVE">
								<p>
									, talvez compartilhe por aqui o que ando aprendendo.
								</p>
								<br />
							</Reveal>
						</Reveal>
						<p>
							Moro em
						</p>
						<Reveal label="ITAJAÍ">

							<p>
								, Santa Catarina. Você pode me achar no
							</p>
							<Reveal dependsOnLabel='ITAJAÍ' label="GITHUB">
								<p>
									ou LinkedIn
								</p>
							</Reveal>
						</Reveal>

					</section >

					<div className='list'>


						{experiences.map(({
							business, businessURL, description, endDate, id, skills, startDate, title
						}) => (
							<Card
								key={id}
								leftSide={
									{
										time: {
											startDate,
											endDate
										},
										img: ''
									}
								}
								url={businessURL}
								business={business}
								description={description}
								title={title}
								skills={skills}
							/>
						))}
					</div>

					<a
						target="_blank"
						rel="noopener noreferrer"
						className={home__resumeLink}
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

				</main>
			</div>

		</div >

	);
}
