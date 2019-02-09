import React, { Fragment } from 'react';
import ContactCard from './ContactCard';

export default function ContactDeck() {
  return (
    <Fragment>
      <h2 id="contact" className="form-title title small-space">
        Contact
      </h2>
      <form className="contact-container gradient container column shadow big-space">
        <ContactCard />
      </form>
    </Fragment>
  );
}
