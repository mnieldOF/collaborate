import React from 'react';
import { Global, css } from '@emotion/core';
import { theme } from './theme';

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      html {
        font-family: ${theme.fonts.sansSerif};
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }
      body {
        margin: 0;
        font-family: ${theme.fonts.sansSerif};
      }
    `}
  />
);

export default GlobalStyle;