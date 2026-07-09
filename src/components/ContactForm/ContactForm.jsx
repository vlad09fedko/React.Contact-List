import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import propTypes from 'prop-types';

import { createEmptyContact, putToStorage } from '../../functions';

import InputArea from './InputArea/InputArea';

import styles from './contactForm.module.css';

function ContactForm(props) {
  const { contacts, currentContact, setContacts, onDeleteContact } = props;

  const [contact, setContact] = useState({ ...currentContact });

  const onSaveBtn = event => {
    event.preventDefault();

    if (currentContact.id) {
      editContact(contact);
    } else {
      createContact(contact);
      setContact(createEmptyContact());
    }
  };

  const createContact = formState => {
    const newContact = {
      ...formState,
      id: uuid(),
    };
    const newContacts = [...contacts, newContact];

    putToStorage(newContacts);
    setContacts(newContacts);
  };

  const editContact = formState => {
    const editedContact = {
      ...formState,
      id: currentContact.id,
    };
    const editedContacts = contacts.map(contact => {
      if (editedContact.id === contact.id) {
        return editedContact;
      }
      return contact;
    });

    putToStorage(editedContacts);
    setContacts(editedContacts);
  };

  return (
    <form onSubmit={onSaveBtn}>
      <InputArea
        name='fName'
        placeholder='First name'
        type='text'
        value={contact.fName}
        isRequired={true}
        setContact={setContact}
      />

      <InputArea
        name='lName'
        placeholder='Last name'
        type='text'
        value={contact.lName}
        isRequired={true}
        setContact={setContact}
      />

      <InputArea
        name='email'
        placeholder='Email'
        type='email'
        value={contact.email}
        setContact={setContact}
      />

      <InputArea
        name='phone'
        placeholder='Phone'
        type='tel'
        value={contact.phone}
        setContact={setContact}
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
