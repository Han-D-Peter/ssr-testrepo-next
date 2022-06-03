import { css, SerializedStyles } from '@emotion/react';
import { PropsWithChildren, useMemo } from 'react';

type TextType = 'title28' | 'title24' | 'title16' | 'body14' | 'tag12';

interface TextProps {
  type: TextType;
}

const Text: React.FC<PropsWithChildren<TextProps>> = ({ children, type }) => {
  const textStyle = useMemo(() => TextStyleMap[type], [type]);

  return <div css={textStyle}>{children}</div>;
};

export default Text;

export const TextStyleMap: Record<TextType, SerializedStyles> = {
  title28: css`
    font-size: 28px;
    line-height: 34px;
    font-weight: 700;
  `,
  title24: css`
    font-size: 24px;
    line-height: 29px;
    font-weight: 700;
  `,
  title16: css`
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
  `,
  body14: css`
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
  `,
  tag12: css`
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;
  `,
};
