'use client';

import { Card } from '@/components/Card/Card';
import Reveal from '@/components/Reveal/Reveal';
import { asideContent, layoutContainer, mainContent, section } from './Home.css';

export default function Home() {
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
				<Card
					business='UseRH'
					endDate='Jul 2024'
					startDate='Set 2023'
					description='Desenvolvimento de plataformas web para gestão de avaliações de desempenho, focado em UX/UI e lógica de backend no Mendix. Contribuí ativamente para melhorar a experiência do usuário e a organização da aplicação.'
					title='Desenvolvedor Mendix'
					skills={[
						'Mendix', 'Low code', 'SCSS', 'HTML', 'UX/UI'
					]}
				/>
				<Card
					startDate='Jan 2023'
					endDate='Mai 2023'
					business='Freelancer'
					description='Desenvolvimento de projetos web e mobile. Criação de site e compra de domínio, garantindo presença online.'
					title='Desenvolvedor Web e Mobile'
					skills={[
						'React', 'React Native', 'Expo', 'Firebase', 'Typescript', 'UX/UI'
					]}
				/>
				<Card
					endDate='Dez 2022'
					startDate='Ago 2022'
					business='Group WS'
					description='Atuação no suporte à equipe de elétrica na escolha e implementação de sistemas de automação residencial e revisão de orçamentos.'
					title='Assistente Administrativo de TI'
					skills={[
						'Zigbee', 'ELAN', 'IOT', 'Excel'
					]}
				/>
				<Card
					startDate='Nov 2018'
					endDate='Jun 2022'
					business='Joinsy'
					description='Desenvolvimento e manutenção de automações para extração de dados de portais públicos e privados, otimizando processos de licitação.'
					title='Desenvolvedor RPA / Web Crawling'
					skills={[
						'JavaScript', 'Typescript', 'Node.js', 'jQuery',
						'Low code', 'RabbitMQ', 'Docker', 'Puppeteer', 'PostgreSQL'
					]}
				/>






			</main>

		</div >

	);
}
