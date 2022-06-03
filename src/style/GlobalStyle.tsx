import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionNormalize}
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `}
  />
);

export default GlobalStyle;
