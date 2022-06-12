import React, { memo } from 'react';
import { Logo } from '../Logo';
import { Button } from '../Button';
import styled from '@emotion/styled';
import Router from 'next/router';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo onClick={() => Router.push('/')} />
      <Button color="Gray800">로그인</Button>
    </HeaderContainer>
  );
};

export default memo(Header);

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 92px;
`;
