import colors, { gray, purple, white } from './colors'
import { bodyFont, headingFont, typeScale } from './fonts'

export interface Theme {
  colors: typeof colors
  fonts: {
    headingFont: typeof headingFont
    bodyFont: typeof bodyFont
  }
  typeScale: typeof typeScale
  primaryColor: string
  secondaryColor: string
  tertiaryColor: string
  backgroundColor: string
  textColor: string
  secondaryTextColor: string
}

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
