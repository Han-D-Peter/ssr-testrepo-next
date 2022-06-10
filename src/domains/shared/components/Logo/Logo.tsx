import styled from '@emotion/styled';
import { memo } from 'react';

const Logo = () => {
  return <LogoImg src="/dewspaper_logo-02.svg" alt="logo" />;
};

export default memo(Logo);

const LogoImg = styled.img`
  width: 110px;
`;
