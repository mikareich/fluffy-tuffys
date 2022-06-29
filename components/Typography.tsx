import { css } from '@emotion/css';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

const headingStyles = (props: { theme: Theme }) => css`
  font-family: ${props.theme.typography.headingFont};
`;

const bodyStyles = (props: { theme: Theme }) => css`
  font-family: ${props.theme.typography.bodyFont};
`;

export const Heading1 = styled.h1`
  ${headingStyles}
  font-size: ${(props) => props.theme.typography.typeScale.heading1};
`;

export const Heading2 = styled.h1`
  ${headingStyles}
  font-size: ${(props) => props.theme.typography.typeScale.heading2};
`;

export const Heading3 = styled.h3`
  ${headingStyles}
  font-size: ${(props) => props.theme.typography.typeScale.heading3};
`;

export const Heading4 = styled.h4`
  ${headingStyles}
  font-size: ${(props) => props.theme.typography.typeScale.heading4};
`;

export const Heading5 = styled.h5`
  ${headingStyles}
  font-size: ${(props) => props.theme.typography.typeScale.heading5};
`;

export const Heading6 = styled.h6`
  ${headingStyles}
  font-size: ${(props) => props.theme.typography.typeScale.heading6};
`;

export const TextLarge = styled.p`
  ${bodyStyles}
  font-size: ${(props) => props.theme.typography.typeScale.textLarge};
`;

export const Text = styled.p`
  ${bodyStyles}
  font-size: ${(props) => props.theme.typography.typeScale.textMedium};
`;

export const TextSmall = styled.p`
  ${bodyStyles}
  font-size: ${(props) => props.theme.typography.typeScale.textSmall};
`;
