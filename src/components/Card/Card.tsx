import { cardContainer, cardContent, cardDescription, cardTimeContainer, cardTitle, skillContainer, skillList } from './Card.css';

interface CardProps {
	skills: string[],
	title: string,
	description: string,
}

export function Card({
	skills, title, description
}: CardProps) {
	return (
		<div className={cardContainer}>
			<span className={cardTimeContainer}>2024 — Present</span>
			<div className={cardContent}>
				<span className={cardTitle}>{title} ·</span>

				<p className={cardDescription}>
					{description}
				</p>
				<ul className={skillList}>
					{skills.map(skill => <li className={skillContainer} key={skill}>{skill}</li>)}

				</ul>
			</div>
		</div>
	);
}