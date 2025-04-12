import '@/styles/globals.css.ts';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
	subsets: [
		'latin'
	],
	variable: '--font-manrope-mono',
});


export const metadata: Metadata = { title: 'Pedro Zunino', };

export default function RootLayout({ children, }: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<html lang="en">
			<body className={manrope.className}>
				{children}
			</body>
		</html>
	);
}
