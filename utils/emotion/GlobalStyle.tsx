import { css, Global, useTheme } from '@emotion/react';
import React from 'react';
import { normalize } from 'polished';

function GlobalStyle() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        ${normalize()}

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          background-color: ${theme.colors.background};
          font-family: ${theme.typography.bodyFont};
          color: ${theme.colors.text};
          font-size: ${theme.typography.typeScale.textMedium};
        }
      `}
    />
  );
}

export default GlobalStyle;
