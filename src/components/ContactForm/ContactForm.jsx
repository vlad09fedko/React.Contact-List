import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../api/contact-service';
import { EMPTY_CONTACT } from '../../constants/constants';
import {
  addContact,
  changeContact,
  deleteContact,
} from '../../store/actions/contactActions';

import InputArea from './InputArea/InputArea';

import styles from './contactForm.module.css';

function ContactForm() {
  const [contact, setContact] = useState({ ...EMPTY_CONTACT });

  const dispatch = useDispatch();

  const currentContact = useSelector(
    state => state.currentContactObj.currentContact,
  );

  useEffect(() => {
    setContact(currentContact);
  }, [currentContact]);

  const inputHandler = ({ target: { name, value } }) => {
    setContact(prevContact => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const clearInput = ({ target }) => {
    setContact(prevContact => ({
      ...prevContact,
      [target.previousElementSibling.name]: '',
    }));
  };

  const onFormSubmit = event => {
    event.preventDefault();

    if (contact.id) {
      api
        .put(`/contacts/${contact.id}`, contact)
        .then(({ data }) => dispatch(changeContact(data)));
    } else {
      api
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addContact(data)));
    }

    if (!contact.id) {
      setContact({ ...EMPTY_CONTACT });
    }
  };

  const onDeleteContact = () => {
    api
      .delete(`/contacts/${contact.id}`)
      .then(({ data }) => dispatch(deleteContact(data.id)));
  };

  return (
    <form onSubmit={onFormSubmit}>
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
          onClick={onDeleteContact}
          value='Delete'
          style={{
            visibility: contact.id ? 'visible' : 'hidden',
          }}></input>
      </div>
    </form>
  );
}

export default ContactForm;
