import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { screenMQ } from '@/styles/theme.css';
import { sizeProp } from '@/utils/sizeProp';
export const title = recipe({
  base: {
    background: 'linear-gradient(90deg, #B0A4EE 0%, #738CF7 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    width: '100%',
    '@media': {
      [screenMQ.m]: {
        marginTop: sizeProp(96),
      },
    },
  },
  variants: {
    textAlign: {
      center: {
        textAlign: 'center',
      },
      start: {
        textAlign: 'start',
      },
      end: {
        textAlign: 'end',
      },
    },
  },
});

export type titleVariants = RecipeVariants<typeof title>;
export type TitleType = NonNullable<titleVariants>['textAlign'];
