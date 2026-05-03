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
						Comecei <strong style={{color:vars.color.white}}>automatizando</strong> coletas em portais públicos e privados com Node.js
						e filas em RabbitMQ, orquestrando dezenas de robôs em paralelo.
					</p>
					<p>
						Hoje construo <strong style={{color:vars.color.white}}>APIs REST em NestJS</strong> com DDD e Clean Architecture sobre
						PostgreSQL e MongoDB, processamento assíncrono em BullMQ e interfaces em Next.js.
					</p>
					<p>
						Já levei sistemas <strong style={{color:vars.color.white}}>do levantamento ao deploy</strong>: chat corporativo em RocketChat
						via DDP, mail server próprio (SMTP/IMAP, SPF/DKIM/DMARC) e infra em Docker com Traefik.
					</p>
					<p>
						Moro em Itajaí, Santa Catarina.
					</p>
				</section>


				
				<ExperienceList/>
				
				<a
					target="_blank"
					rel="noopener noreferrer"
					className={home__resumeLink}
					href='/PedroZunino_Curriculo.pdf'
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
