import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { Color } from 'src/domains/shared/constants';
import { GlobalEditorStyle } from './GlobalEditorStyle';
import { GlobalModalStyle } from './GlobalModalStyle';

const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body,
      #__next {
        height: 100%;
        background-color: ${Color.Gray900};
      }

      ${emotionNormalize}
      ${GlobalEditorStyle}
      ${GlobalModalStyle}
    `}
  />
);

export default GlobalStyle;
