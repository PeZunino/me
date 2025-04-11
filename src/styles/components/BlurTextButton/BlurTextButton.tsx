'use client';

import React, { ReactNode, useState } from 'react';
import { blur, revealContainer, revealed } from './BlurTextButton.css';


interface RevealProps {
	label: string
	children: ReactNode
}

export default function Reveal({
	label, children 
}: RevealProps) {
	const [
		isBlurred, setIsBlurred
	] = useState(false);

	return (
		<>
			<span className={revealContainer} onClick={() => setIsBlurred(!isBlurred)}>
				{label}
			</span>
			<span className={isBlurred ? revealed : blur}> {children}</span>
		</>
	);
}

;
