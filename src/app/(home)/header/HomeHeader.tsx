import { IoLogoGithub, IoLogoLinkedin,IoMdMail } from 'react-icons/io';
import { linksContainer, subtitle } from './HomeHeader.css';
import Link from './Link';

export default function HomeHeader(){
	return (
		<>
			<h1>Pedro Zunino</h1>
			<h2>Desenvolvedor Fullstack</h2>
			<p className={subtitle}>
				Node.js, NestJS, React e Next.js
			</p>
      
			<div className={linksContainer}>
				<Link
					title="PeZunino"
					href="https://github.com/PeZunino"
				>
					<IoLogoGithub size={24} />
				</Link>
				<Link
					title="pedrozunino.santos@gmail.com"
					href="mailto:pedrozunino.santos@gmail.com"

				>
					<IoMdMail size={24} />
				</Link>
				<Link
					title="Pedro Zunino dos Santos"
					href="https://www.linkedin.com/in/pedro-zunino"
				>
					<IoLogoLinkedin size={24} />
				</Link>
			</div>
		</>
	);
}