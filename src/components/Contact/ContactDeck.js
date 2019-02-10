import React, { Fragment, Component } from 'react';
import ContactCard from './ContactCard';
import ModalDeck from '../Modal/ModalDeck';

export default class ContactDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.exitModal = this.exitModal.bind(this);
  }

  onChange = e => {
    let value = e.target.value;
    this.setState({
      [e.target.id]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    document.getElementsByClassName('modal-container')[0].classList.toggle('show');
    document.getElementsByTagName('body')[0].classList.toggle('show');
    document.getElementById('form').reset();
  };

  exitModal = () => {
    document.getElementsByClassName('modal-container')[0].classList.toggle('show');
    document.getElementsByTagName('body')[0].classList.toggle('show');
  };

  render() {
    return (
      <Fragment>
        <ModalDeck info={this.state} exit={this.exitModal} />
        <h2 id="contact" className="form-title title small-space">
          Contact
        </h2>
        <form
          onChange={this.onChange}
          id="form"
          className="contact-container gradient container column shadow big-space"
        >
          <ContactCard onSubmit={this.onSubmit} />
        </form>
      </Fragment>
    );
  }
}
