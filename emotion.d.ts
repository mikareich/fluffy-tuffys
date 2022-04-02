import '@emotion/react'
import { Theme as CustomTheme } from './utils/emotion/interface'

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
