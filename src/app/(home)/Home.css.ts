import { style } from '@vanilla-extract/css';


export const section = style({
	padding: '5rem 20rem',

	display: 'flex',
	gap: '1rem',
	flexFlow: 'column',
	alignItems: 'center',

	backgroundImage: 'url(/45-degree-fabric-dark.png)',
	backgroundColor: '#161616',

	textAlign:'center',
	lineHeight: '2.60rem',
	fontSize: '1.5rem',
	height: '100vh',
	'@media': {
		'screen and (max-width: 1024px)': {
			padding: '1rem 3rem',
			fontSize:'0.7rem',
			lineHeight: '1.5rem'
		},
		// 'screen and (max-width: 768px)': {padding: '2rem 5rem',},
		// 'screen and (max-width: 480px)': {
		// 	padding: '1.5rem 2rem', 
		// 	fontSize: '1.5rem',
		// 	lineHeight: '2rem'
		// }
	}
});
