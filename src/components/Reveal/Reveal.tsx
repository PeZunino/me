'use client';

import React, { ReactNode, useState } from 'react';
import { useRevealStore } from '@/stores/reveal.store';
import { revealButton, revealContainer } from './Reveal.css';

interface RevealProps {
	label: string,
	dependsOnLabel?: string,
	children: ReactNode,
}

export default function Reveal({
	label, children, dependsOnLabel = ''
}: RevealProps) {


	const visibleLabelsList = useRevealStore((state) => state.visibleLabelsList);

	const addToVisibleLabelsList = useRevealStore((state) => state.addToVisibleLabelsList);

	const removeFromVisibleLabelsList = useRevealStore((state) => state.removeFromVisibleLabelsList);

	const isChildren = Boolean(dependsOnLabel);

	const parentLabelIsVisible = visibleLabelsList.has(dependsOnLabel);

	const isLocked = isChildren && !parentLabelIsVisible;

	const [
		isVisible, setIsVisible
	] = useState(visibleLabelsList.has(label));


	function revealText() {

		if (isVisible) {
			removeFromVisibleLabelsList(label);

			setIsVisible(false);

		} else {
			addToVisibleLabelsList(label);

			setIsVisible(true);

		}

	}

	return (
		<>
			<button disabled={isLocked} className={revealContainer} onClick={() => revealText()}>
				{label}
			</button >
			<span className={(isChildren ? (isLocked ? (!parentLabelIsVisible) : isVisible) : isVisible) ? revealButton.revealed : revealButton.blurred}>
				{children}
			</span >
		</>
	);
}

;
