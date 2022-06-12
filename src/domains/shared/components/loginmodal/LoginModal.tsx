import styled from '@emotion/styled';
import React from 'react';
import { Color } from '../../constants';
import { useModalStore } from '../../store/modal';
import Icon from '../Icon';

const LoginModal = () => {
  const { showOffModal } = useModalStore();

  const closeModal = () => {
    showOffModal();
  };

  return (
    <LoginModalContainer>
      <LoginModalTitle>로그인</LoginModalTitle>
      <LoginModalCloseBtn onClick={closeModal}>
        <Icon icon="Close" size={50} color={`${Color.White100}`} />
      </LoginModalCloseBtn>
      <LoginModalMethodContainer>
        <LoginModalGoogleContainer>
          <LoginModalSocialBtn>구글로 로그인</LoginModalSocialBtn>
        </LoginModalGoogleContainer>
        <LoginModalKakaoContainer>
          <LoginModalSocialBtn>카카오톡으로 로그인</LoginModalSocialBtn>
        </LoginModalKakaoContainer>
      </LoginModalMethodContainer>
    </LoginModalContainer>
  );
};

const LoginModalContainer = styled.div`
  padding-top: 22px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoginModalTitle = styled.div`
  color: ${Color.White100};
  font-size: 20px;
  font-weight: bold;
`;

const LoginModalCloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
`;

const LoginModalMethodContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;
  width: 275px;
  height: 132px;
`;

const LoginModalSocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 275px;
  height: 54px;
  border-radius: 8px;
`;

const LoginModalGoogleContainer = styled(LoginModalSocialContainer)`
  background-color: ${Color.White100};
`;

const LoginModalKakaoContainer = styled(LoginModalSocialContainer)`
  background-color: #ffe812;
`;

const LoginModalSocialBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
  width: 100%;
  height: 100%;
`;
export default LoginModal;
