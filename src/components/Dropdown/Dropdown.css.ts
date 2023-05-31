import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';
import { fontVariant } from '@/styles/variant.css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

const { color, space, borderRadius, zIndices } = themeTokens;

export const wrapper = style({
	position: 'relative',
});

export const button = style({
	padding: space.lg,
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%',
	backgroundColor: color.grey50,
	borderRadius: borderRadius.xs,
	border: 'none',
	boxShadow: `0 0 0 1px ${color.grey100} inset`,
	cursor: 'pointer',
	color: color.sub,
});

export const buttonText = style({
	...fontVariant.label2,
	color: color.primary,
	selectors: {
		[`${button}:disabled  &`]: {
			color: color.disable,
		},
	},
});

export const menu = recipe({
	base: {
		position: 'absolute',
		padding: space.sm,
		background: color.white,
		borderRadius: borderRadius.sm,
		color: color.primary,
		width: '100%',
		boxShadow: '0px 7px 14px -7px rgba(0, 0, 0, 0.04), 0px 28px 42px rgba(0, 0, 0, 0.04)',
		zIndex: zIndices.dropdown,
		maxHeight: '300px',
		overflow: 'auto',
		selectors: {
			'&::-webkit-scrollbar': {
				width: '12px',
			},
			'&::-webkit-scrollbar-thumb': {
				borderRadius: borderRadius.pill,
				border: `4px solid rgba(0,0,0,0)`,
				backgroundClip: 'padding-box',
				backgroundColor: color.grey300,
			},
		},
	},
	variants: {
		xplacement: {
			left: {
				left: 0,
			},
			right: {
				right: 0,
			},
		},
		yplacement: {
			top: {
				top: 'auto',
				bottom: '100%',
				marginTop: 0,
				marginBottom: space.sm,
			},
			bottom: {
				top: '100%',
				bottom: 'auto',
				marginTop: space.sm,
				marginBottom: 0,
			},
		},
	},
	defaultVariants: {
		xplacement: 'left',
		yplacement: 'bottom',
	},
});

export const item = recipe({
	base: {
		...fontVariant.label2,
		margin: '0',
		padding: `${space.md} ${space.lg}`,
		listStyleType: 'none',
		cursor: 'pointer',
		display: 'flex',
		justifyContent: 'space-between',
		borderRadius: borderRadius.sm,
	},
	variants: {
		selected: {
			true: {
				backgroundColor: 'rgba(28, 26, 66, 0.1)',
			},
			false: {
				selectors: {
					'&:hover': {
						backgroundColor: 'rgba(28, 26, 66, 0.04)',
					},

					'&:active': {
						borderRadius: borderRadius.sm,
						backgroundColor: 'rgba(28, 26, 66, 0.1)',
					},
				},
			},
		},
	},
	defaultVariants: {
		selected: false,
	},
});

export const checkedIconColor = style({
	color: color.grey500,
});

export type MenuVariant = RecipeVariants<typeof menu>;
