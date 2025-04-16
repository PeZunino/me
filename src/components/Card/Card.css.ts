import { style } from '@vanilla-extract/css';
import { cardList } from '@/app/(home)/Home.css';
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
			borderRadius:' 10px',
			border: '1px solid rgba( 255, 255, 255, 0.18 )',
		}
	},

	opacity: '1', 
});

export const cardDimmedOnHover = style({selectors: {[`${cardList}:hover &:not(:hover)`]: {opacity: '0.5',},},});

export const cardHighlighted = style({
	':hover': {
		opacity: '1 !important',
		transform: 'scale(1.02)',
	},
});


export const cardTimeContainer = style({
	width:'25%',
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

export const businessName = style({
	fontSize: vars.font.size.md,
	fontWeight: 'bold',

});

export const businessNameHover = style({selectors: {[`${cardContainer}:hover &`]: {color: '#d4a418', },},});

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

