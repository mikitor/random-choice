import React from 'react';
import Modal from 'react-modal';

const ChoiceModal = props => (
  <Modal
    isOpen={props.modalIsOpen}
    onRequestClose={props.closeModal}
    contentLabel="Selected choice"
  >
    <h1>Selected choice</h1>
    <p>{props.randomOption}</p>
    <button onClick={props.closeModal}>Will do!</button>
  </Modal>
);

export default ChoiceModal;
