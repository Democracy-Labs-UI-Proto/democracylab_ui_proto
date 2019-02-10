import React, { Fragment } from 'react';
export default function ContactCard(props) {
  return (
    <Fragment>
      <div className="form-input-container">
        <input id="name" type="text" placeholder="Name" required="" />
        <i className="fas fa-user" />
      </div>
      <div className="form-input-container">
        <input id="email" type="text" placeholder="example@email.com" required="" />
        <i className="fas fa-envelope" />
      </div>
      <div className="form-input-container">
        <textarea id="message" placeholder="Message" cols="30" rows="10" required="" />
        <i className="fas fa-pen" />
      </div>
      <button onClick={props.onSubmit} className="btn secondary-button">
        Send
      </button>
    </Fragment>
  );
}
