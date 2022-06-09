import React, { useRef, useState } from 'react';
import Logo from '../Logo';
import Button from '../button';
import { Color } from '../../constants';
import styled from '@emotion/styled';
import TextInput from '../TextInput';
import { useModalStore } from '../../store/modal';
import Modal from 'react-modal';
import Loginmodal from '../loginmodal/LoginModal';

const customStyles = {
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
      <Logo />
      <SearchBarContainer>
        <TextInput
          placeholder="검색어를 입력하세요"
          variant="search"
          value={showModal ? 'true' : 'false'}
          onChange={onChangeTextOnSearchBar}
        />
      </SearchBarContainer>
      <Button color="Gray800" textColor="Primary100" size="small" onClick={openModal}>
        로그인
      </Button>
      <Modal
        ariaHideApp={false}
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example"
      >
        <Loginmodal />
      </Modal>
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
