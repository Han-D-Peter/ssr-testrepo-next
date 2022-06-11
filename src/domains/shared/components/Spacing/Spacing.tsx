import { css } from '@emotion/react';
import { memo, useMemo } from 'react';

interface SpacingProps {
  row?: number;
  col?: number;
}

const Spacing = ({ col = 0, row = 0 }: SpacingProps) => {
  const SpacingCss = useMemo(() => SpacingStyle(col, row), [col, row]);

  return <div css={SpacingCss} />;
};

export default memo(Spacing);

const SpacingStyle = (col: number, row: number) => css`
  margin-top: ${col}px;
  margin-right: ${row}px;
`;
