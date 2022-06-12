import styled from '@emotion/styled';
import { memo } from 'react';

const Footer = () => {
  return <FooterContainer>Copyrightⓒ Dewspaper 2022.</FooterContainer>;
};

export default memo(Footer);

const FooterContainer = styled.footer`
  height: 58px;
  color: white;
`;
