import { ElementType } from 'react'
import colors from './colors'
import { headingFont, bodyFont, typeScale } from './fonts'

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

export interface cssProps {
  theme?: Theme | undefined
  as?: ElementType<any> | undefined
}
