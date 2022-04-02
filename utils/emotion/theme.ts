import colors, { gray, purple, white } from './colors';
import { bodyFont, headingFont, typeScale } from './fonts';
import { Theme } from './interface';

// eslint-disable-next-line import/prefer-default-export
export const defaultTheme: Theme = {
  colors,
  fonts: {
    headingFont,
    bodyFont,
  },
  typeScale,
  primaryColor: purple[300],
  secondaryColor: purple[200],
  tertiaryColor: purple[100],
  backgroundColor: gray[300],
  textColor: white,
  secondaryTextColor: gray[100],
}
