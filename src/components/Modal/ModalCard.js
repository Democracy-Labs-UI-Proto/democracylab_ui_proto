import React from 'react';

export default function ModalCard(props) {
  return (
    <div className="modal shadow container column">
      <p className="small-space">{`Thank you for your interest, ${
        props.info.name
      }! Your message has been sent to the team and they will reply as soon as possible!`}</p>
      <button className="modal-button btn secondary-button" onClick={props.exit}>
        Close
      </button>
    </div>
  );
}
