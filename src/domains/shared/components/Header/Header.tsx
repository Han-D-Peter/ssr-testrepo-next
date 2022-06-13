import React, { useRef, useState, memo } from 'react';
import { Logo } from '../Logo';
import { Color } from '../../constants';
import styled from '@emotion/styled';
import { useModalStore } from '../../store/modal';
import ReactModal from 'react-modal';
import Loginmodal from '../LoginModal/LoginModal';
import Router from 'next/router';
import { Button } from '../Button';
import { TextInput } from '../TextInput';

const customStyles = {
  overlay: {
    backgroundColor: 'black',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: '320px',
    backgroundColor: `${Color.Gray800}`,
    borderRadius: '16px',
    border: 'none',
  },
};

const Header = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [searchText, setSearchText] = useState<string>('');

  function onChangeTextOnSearchBar(e: React.ChangeEvent<HTMLInputElement>) {
    const text = e.target.value;
    setSearchText(text);
  }

  const { showModal, showOnModal, showOffModal } = useModalStore();

  function openModal() {
    console.log('click');
    showOnModal();
  }

  function closeModal() {
    showOffModal();
  }

  return (
    <HeaderContainer>
      <Logo onClick={() => Router.push('/')} />
      <SearchBarContainer>
        <TextInput
          placeholder="검색어를 입력하세요"
          variant="search"
          value={showModal ? 'true' : 'false'}
          onChange={onChangeTextOnSearchBar}
        />
      </SearchBarContainer>
      <Button color="Gray800" size="small" onClick={openModal}>
        로그인
      </Button>
      <ReactModal
        ariaHideApp={false}
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example"
        overlayClassName={{
          base: `Modal__overlay Modal__overlay--centered`,
          afterOpen: 'Modal__overlay--after-open',
          beforeClose: 'Modal__overlay--before-close',
        }}
        bodyOpenClassName={'Modal__body--open'}
        closeTimeoutMS={300}
      >
        <Loginmodal />
      </ReactModal>
    </HeaderContainer>
  );
};

export default memo(Header);

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
