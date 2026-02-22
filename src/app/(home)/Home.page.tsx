'use client';

import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from 'react-icons/io';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Card } from '@/components/Card/Card';
import Reveal from '@/components/Reveal/Reveal';
import info from '../../../experiences.json';
import { home, home__resumeLink } from './Home.css';
import HomeHeader from './header/HomeHeader';
import PresentationSection from './presentationSection/PresentationSection';

interface ExperienceInfo {
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

				<HomeHeader/>

				<main>
					<PresentationSection/>

					<div className='list'>
						{experiences.map(({
							business, businessURL, description, endDate, skills, startDate, title
						}) => (
							<Card
								key={`${endDate}-${businessURL}`}
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
