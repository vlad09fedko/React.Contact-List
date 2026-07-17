import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import createEmptyContact from '../../createEmptyContact';

import InputArea from './InputArea/InputArea';

import styles from './contactForm.module.css';

function ContactForm({ currentContact, saveContact, onDeleteContact }) {
  const [contact, setContact] = useState(createEmptyContact);

  useEffect(() => {
    setContact(currentContact);
  }, [currentContact]);

  const inputHandler = ({ target }) => {
    setContact(prevContact => ({
      ...prevContact,
      [target.name]: target.value,
    }));
  };

  const clearInput = ({ target }) => {
    setContact(prevContact => ({
      ...prevContact,
      [target.previousElementSibling.name]: '',
    }));
  };

  const onSaveBtn = event => {
    event.preventDefault();
    saveContact(contact);

    if (!currentContact.id) {
      setContact(createEmptyContact());
    }
  };

  return (
    <form onSubmit={onSaveBtn}>
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
            visibility: !contact.id ? 'hidden' : 'visible',
          }}></input>
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  onSaveBtn: propTypes.func.isRequired,
};

export default ContactForm;
