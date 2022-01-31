import { css } from '@emotion/react'
import { Theme } from './theme'

export const globalStyles = (theme: Theme) => css`
  html {
    background-color: ${theme.backgroundColor};
  }
`

export default {}
