import { css } from '@emotion/react'
import { Theme } from './interface'

export const globalStyles = (theme: Theme) => css`
  html {
    background-color: ${theme.backgroundColor};
  }
`

export default {}
