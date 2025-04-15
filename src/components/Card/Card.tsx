import { cardContainer, cardContent, cardDescription, cardTimeContainer, cardTitle, skillContainer, skillList } from './Card.css';

interface CardProps {
	skills: string[],
	title: string,
	description: string,
	business: string,
	startDate: string,
	endDate: string
}

export function Card({
	skills, title, description, business, endDate, startDate
}: CardProps) {
	return (
		<div className={cardContainer}>
			<span className={cardTimeContainer}>{startDate} — {endDate ?? 'Present'}</span>
			<div className={cardContent}>
				<span className={cardTitle}>{title} · {business}</span>

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