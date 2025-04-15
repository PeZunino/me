import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme/default.css';

export const cardContainer = style({
	padding: '1rem',
	display:'flex',
	cursor: 'pointer',
	border: '1px solid transparent',
	transition: 'all 0.2s ease-in-out',
	marginBottom: '2rem',
	selectors:{
		'&:hover':{
			background: ' rgba(150, 150, 150, 0.1);',
			// boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.2)',
			borderRadius:' 10px',
			border: '1px solid rgba( 255, 255, 255, 0.18 )',
		}
	}

});

export const cardTimeContainer = style({
	width:'20%',
	fontWeight:'bold',
	color: vars.color.gray,
	marginTop: '0.25rem'

});

export const cardContent = style({
	flex:'1',
	display:'flex',
	flexDirection: 'column',
	gap: '1rem'
});

export const cardTitle = style({
	fontSize: vars.font.size.md,
	fontWeight: 'bold'
});

export const cardDescription = style({
	fontSize: '0.875rem',
	color: vars.color.gray
});

export const skillList = style({
	display: 'flex',
	listStyle:'none',
	gap: '0.5rem',
	fontSize: vars.font.size.sm,
	flexWrap: 'wrap'
});

export const skillContainer = style({
	padding: '0.25rem 1rem',
	borderRadius: '15px 15px',
	backgroundColor: ' rgba(212, 164, 24, 0.1)',
	color: '#d4a418',
});