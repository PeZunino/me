'use client';

import { useEffect } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { vars } from '@/styles/theme/default.css';
import ExperienceList from './experienceList/ExperienceList';
import HomeHeader from './header/HomeHeader';
import { home__resumeLink, homeContentContainer, homePresentationText, leftSideContent, rightContent } from './Home.css';


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
						Iniciei minha trajetória <strong style={{color:vars.color.white}}>automatizando</strong> coletas de dados e processos em portais públicos e privados, 
						utilizando Node.js, jQuery e integrações com APIs.
					</p>
					<p>
						Com o tempo, ampliei meu foco para o <strong style={{color:vars.color.white}}>desenvolvimento web</strong>, explorando stacks modernas e aprofundando 
						meus conhecimentos em arquitetura de software e organização de código.
					</p>
					<p>
						Busco construir aplicações bem estruturadas, com responsabilidades claras e foco em <strong style={{color:vars.color.white}}>evolução contínua</strong>. 
						Tenho interesse em desenvolver software com mais clareza, consistência e escalabilidade.
					</p>
					<p>
						Moro em Itajaí, Santa Catarina.
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
