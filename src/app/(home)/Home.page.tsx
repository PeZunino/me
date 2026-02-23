'use client';

import { MdOutlineArrowOutward } from 'react-icons/md';
import { homePresentationText, home__resumeLink, homeContentContainer, leftSideContent, rightContent } from './Home.css';
import HomeHeader from './header/HomeHeader';
import ExperienceList from './experienceList/ExperienceList';
import { useEffect } from 'react';


export default function Home() {
	useEffect(() => {
  const handleMove = (e: MouseEvent) => {
    document.documentElement.style.setProperty('--x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--y', `${e.clientY}px`);
  };

  window.addEventListener('mousemove', handleMove);

  return () => window.removeEventListener('mousemove', handleMove);
}, []);
	return (

		<div className={homeContentContainer}>
			<aside className={leftSideContent}>
				<HomeHeader/>
			</aside>

			<main className={rightContent}>

				<section className={homePresentationText}>
					<p>
						Sou desenvolvedor com foco em backend e integrações web.
						Iniciei minha trajetória automatizando processos e realizando coletas de dados em portais públicos e privados, utilizando 
						Node.js, jQuery e integrações com APIs.
					</p>
					<p>
						Com o tempo, ampliei meu interesse pelo desenvolvimento web de forma mais estruturada, explorando stacks modernas e
						 aprofundando meus conhecimentos em arquitetura de software, organização de código e ciclo de vida de desenvolvimento (SDLC).
					</p>
					<p>
						Tenho interesse em construir aplicações bem estruturadas, com responsabilidades claras e foco em
						 evolução contínua. Sigo estudando e aplicando boas práticas para desenvolver software com mais intenção, 
						 clareza e escalabilidade.
					</p>
					<p>
						Moro em Itajaí, Santa Catarina. Você pode me encontrar no GitHub ou no LinkedIn.
					</p>

				</section >

				
				<ExperienceList/>
				
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


	);
}
