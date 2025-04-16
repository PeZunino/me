import { businessName, businessNameHover, cardContainer, cardContent, cardDescription, cardDimmedOnHover, cardHighlighted, cardTimeContainer, cardTitle, skillContainer, skillList } from './Card.css';

interface CardProps {
	skills: string[],
	title: string,
	description: string,
	business: string,
	startDate: string,
	endDate: string,
	businessURL: string
}

export function Card({
	skills, title, description, business, endDate, startDate, businessURL
}: CardProps) {
	return (
		<div className={`${cardContainer} ${cardDimmedOnHover} ${cardHighlighted}`}>
			<span className={cardTimeContainer}>{startDate} — {endDate ?? 'Present'}</span>
			<div className={cardContent}>
				<span className={`${cardTitle} ${businessNameHover}`}>
					{title}{' '}·{' '}
					<a className={`${businessName} `}
						target="_blank"
						rel="noopener noreferrer"
						href={businessURL}
					>
						{business}
					</a>
				</span>

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