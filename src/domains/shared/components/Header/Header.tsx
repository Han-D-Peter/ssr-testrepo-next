import React from 'react';
import Logo from '../Logo';
import Button from '../button';
import { Color } from '../../constants';
import styled from '@emotion/styled';
import TextInput from '../TextInput';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <SearchBarContainer>
        <TextInput placeholder="검색어를 입력하세요" variant="search" width="327px" />
      </SearchBarContainer>
      <Button color="Gray800" textColor="Primary100" size="small">
        로그인
      </Button>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: ${Color.Gray900};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 92px;
`;

const SearchBarContainer = styled.div`
  width: 327px;
`;
