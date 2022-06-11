import React from 'react';
import { useModalStore } from '../../domains/shared/store/modal';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Main() {
  const { showModal, showOnModal, showOffModal } = useModalStore();

  function openModal() {
    showOnModal();
  }

  function closeModal() {
    showOffModal();
  }
  return (
    <div>
      <button onClick={openModal}>열기</button>
      <Modal isOpen={showModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example">
        <button onClick={closeModal}>닫기</button>
        <div>hello!</div>
      </Modal>
    </div>
  );
}

export default Main;
