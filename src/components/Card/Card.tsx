import { cardContainer, cardContent, cardDescription, cardTimeContainer, cardTitle, skillList } from './Card.css';

export function Card() {
	return (
		<div className={cardContainer}>
			<span className={cardTimeContainer}>2024 — Present</span>
			<div className={cardContent}>
				<span className={cardTitle}>Senior Frontend Engineer, Accessibility ·</span>

				<p className={cardDescription}>Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
				<ul className={skillList}>
					<li>JavaScript</li>
					<li>Typescript</li>
					<li>React</li>
					<li>StoryBook</li>
				</ul>
			</div>
		</div>
	);
}