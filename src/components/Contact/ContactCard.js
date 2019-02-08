import React, { Fragment } from 'react';

export default function ContactCard() {
  return (
    <Fragment>
      <div className="form-input-container">
        <input type="text" placeholder="Name" required="" />
        <i className="fas fa-user" />
      </div>
      <div className="form-input-container">
        <input type="text" placeholder="example@email.com" required="" />
        <i className="fas fa-envelope" />
      </div>
      <div className="form-input-container">
        <textarea placeholder="Message" cols="30" rows="10" required="" />
        <i className="fas fa-pen" />
      </div>
      <button className="btn secondary-button">Send</button>
    </Fragment>
  );
}
