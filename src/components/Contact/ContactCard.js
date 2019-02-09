import React, { Fragment, Component } from 'react';

export default class ContactCard extends Component {
  onSubmit = e => {
    e.preventDefault();
    document.getElementById('form').reset();

    // TODO: expose pop up modal with X to close saying message sent!
  };

  render() {
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
        <button onClick={this.onSubmit} className="btn secondary-button">
          Send
        </button>
      </Fragment>
    );
  }
}
