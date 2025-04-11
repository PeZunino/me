import '@/styles/globals.css.ts';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import { Geist } from 'next/font/google';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: [
		'latin'
	],
});

const playFairDisplay = Playfair_Display({
	subsets: [
		'latin'
	],
	weight: [
		'400', '700'
	],
	variable: '--font-playfair_display',
});

export const metadata: Metadata = { title: 'Pedro Zunino', };

export default function RootLayout({ children, }: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${playFairDisplay.variable}`}>
				{children}
			</body>
		</html>
	);
}
