import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { cssProps } from '../utils/emotion/interface'

const headingStyle = ({ theme }: cssProps) => css`
  font-family: ${theme!.fonts.headingFont};
  color: ${theme!.textColor};
`

const textStyle = ({ theme }: cssProps) => css`
  font-family: ${theme!.fonts.bodyFont};
  color: ${theme!.textColor};
`

export const Heading1 = styled.h1`
  ${headingStyle}
  font-size: ${({ theme }) => theme.typeScale.h1};
`

export const Heading2 = styled.h2`
  ${headingStyle}
  font-size: ${({ theme }) => theme.typeScale.h2};
`

export const Heading3 = styled.h3`
  ${headingStyle}
  font-size: ${({ theme }) => theme.typeScale.h3};
`

export const Heading4 = styled.h4`
  ${headingStyle}
  font-size: ${({ theme }) => theme.typeScale.h4};
`

export const Heading5 = styled.h5`
  ${headingStyle}
  font-size: ${({ theme }) => theme.typeScale.h5};
`

export const Heading6 = styled.h6`
  ${headingStyle}
  font-size: ${({ theme }) => theme.typeScale.h6};
`

export const TextXXL = styled.p`
  ${textStyle}
  font-size: ${({ theme }) => theme.typeScale.textXXL};
`

export const TextXL = styled.p`
  ${textStyle}
  font-size: ${({ theme }) => theme.typeScale.textXL};
`

export const TextL = styled.p`
  ${textStyle}
  font-size: ${({ theme }) => theme.typeScale.textL};
`

export const Text = styled.p`
  ${textStyle}
  font-size: ${({ theme }) => theme.typeScale.text};
`
