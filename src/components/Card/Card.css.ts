import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme/default.css';

export const container = style({
	padding: '1rem',
	marginBottom: '2rem',
	
	display:'grid',
	gridTemplateColumns: '25% 1fr',
	border: '1px solid transparent',
	
	cursor: 'pointer',
	
	transition: 'all 0.2s ease-in-out',
	
	opacity: '1',

	'@media': {
		'(max-width: 900px)': {
			display:'flex',
			flexDirection:'column',
			marginBottom: '6rem',

		},
		'(min-width: 900px)': {
			
			selectors: {
				'&:hover':{
					background: ' rgba(150, 150, 150, 0.1);',
					borderRadius:' 10px',
					border: '1px solid rgba( 255, 255, 255, 0.18 )',
					opacity: '1 !important',
					transform: 'scale(1.02)',
				},
				['.list:hover &:not(:hover)']: {opacity: '0.5',},
				['.list:hover &:hover']: {color: vars.color.yellow500,},
	
			},
		}
	},


});

globalStyle(`${container} .title`,{
	// fontSize: vars.font.size.md,
	fontWeight: 'bold',
});

globalStyle(`${container} .description`,{
	// fontSize: '0.875rem',
	color: vars.color.gray,
	marginTop: '1rem',
	'@media': {'(max-width: 900px)': {fontSize: '12px'}},

});

globalStyle(`${container} .skill_list`,{
	display: 'flex',
	listStyle:'none',
	gap: '0.5rem',
	fontSize: vars.font.size.sm,
	flexWrap: 'wrap',
	marginTop: '1rem',

});

globalStyle(`${container} .skill`,{
	padding: '0.25rem 1rem',
	borderRadius: '15px 15px',
	backgroundColor: ' rgba(212, 164, 24, 0.1)',
	color: '#d4a418',
	'@media': {'(max-width: 900px)': {	padding: '0.5rem 2rem',}},

});

globalStyle(`${container} .time`,{
	fontWeight:'bold',
	color: vars.color.gray,
});