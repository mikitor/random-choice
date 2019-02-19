import React from 'react';
import Modal from 'react-modal';

const ChoiceModal = props => (
  <Modal
    isOpen={props.modalIsOpen}
    onRequestClose={props.closeModal}
    contentLabel="Selected choice"
    className="modal"
  >
    <h1 className="modal__title">Selected choice</h1>
    <p className="modal__text">{props.randomOption}</p>
    <button className="button" type="button" onClick={props.closeModal}>
      Will do!
    </button>
  </Modal>
);

export default ChoiceModal;
