import { useState } from 'react';
import propTypes from 'prop-types';
import { createEmptyContact } from '../../functions';

import InputArea from './InputArea/InputArea';

import styles from './contactForm.module.css';

function ContactForm({ currentContact, onSaveBtn, onDeleteContact }) {
  const [contact, setContact] = useState({...currentContact});

  const inputHandler = event => {
    setContact(prevContact => ({
      ...prevContact,
      [event.target.name]: event.target.value,
    }));
  };

  const clearInput = event => {
    setContact(prevContact => ({
      ...prevContact,
      [event.target.previousElementSibling.name]: '',
    }));
  };

  const saveContact = event => {
    event.preventDefault();
    onSaveBtn(contact);

    if (currentContact.id === null) {
      setContact(createEmptyContact());
    }
  };

  return (
    <form onSubmit={saveContact}>
      <InputArea
        name='fName'
        placeholder='First name'
        type='text'
        value={contact.fName}
        isRequired={true}
        inputHandler={inputHandler}
        onClearClick={clearInput}
      />

      <InputArea
        name='lName'
        placeholder='Last name'
        type='text'
        value={contact.lName}
        isRequired={true}
        inputHandler={inputHandler}
        onClearClick={clearInput}
      />

      <InputArea
        name='email'
        placeholder='Email'
        type='email'
        value={contact.email}
        inputHandler={inputHandler}
        onClearClick={clearInput}
      />

      <InputArea
        name='phone'
        placeholder='Phone'
        type='tel'
        value={contact.phone}
        inputHandler={inputHandler}
        onClearClick={clearInput}
      />

      <div className={styles.buttons}>
        <input type='submit' value='Save'></input>
        <input
          type='button'
          onClick={() => {
            onDeleteContact(currentContact.id);
          }}
          value='Delete'
          style={{
            visibility: contact.id === null ? 'hidden' : 'visible',
          }}></input>
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  onSaveBtn: propTypes.func.isRequired,
};

export default ContactForm;
