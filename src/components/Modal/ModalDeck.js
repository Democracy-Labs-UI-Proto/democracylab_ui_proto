import React from 'react';
import ModalCard from './ModalCard';

export default function ModalDeck(props) {
  return (
    <div className="modal-container">
      <ModalCard info={props.info} exit={props.exit} />
    </div>
  );
}
