import Image from 'next/image';
import { container } from './Card.css';
interface Time {
	endDate: string,
	startDate: string
}

interface LeftSide {
	time?: Time,
	img: string
}

interface CardProps {
	leftSide: LeftSide
	title: string,
	description: string,
	url: string
	skills?: string[],
	business?: string,
}

export function Card({
	leftSide, business, url, description, skills, title
}: CardProps) {
	return (
		<div
			className={container}
		>
			{leftSide.time
				?
				<span className='time'>
					{leftSide.time.startDate} — {leftSide.time.endDate ?? 'Present'}
				</span>
				: <Image src={leftSide.img} alt='' />
			}

			<div>

				<a className='title'
					target="_blank"
					rel="noopener noreferrer"
					href={url}

				>
					{title}
					{business && (
						` · ${business}`
					)}


				</a>

				<p className='description'>
					{description}
				</p>


				{skills && (
					<ul className="skill_list">
						{skills.map(skill => (
							<li className='skill' key={skill}>
								<span>

									{skill}
								</span>
							</li>
						))}
					</ul>
				)}

			</div>

		</div>
	);
}