import styled from '@emotion/styled';
import { memo } from 'react';

interface LogoProps {
  onClick: () => void;
}

const Logo = ({ onClick }: LogoProps) => {
  return (
    <div onClick={onClick}>
      <LogoImg src="/dewspaper_logo-02.svg" alt="logo" />
    </div>
  );
};

export default memo(Logo);

const LogoImg = styled.img`
  width: 110px;
  cursor: pointer;
`;
