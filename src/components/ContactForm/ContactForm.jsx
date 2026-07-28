import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { EMPTY_CONTACT } from '../../constants/constants';
import {
  addContact,
  deleteContact,
  updateContact,
} from '../../store/slices/contactSlice';

import InputArea from './InputArea/InputArea';

import styles from './contactForm.module.css';

function ContactForm() {
  const [contact, setContact] = useState({ ...EMPTY_CONTACT });

  const dispatch = useDispatch();

  const currentContact = useSelector(state => state.currentContactObj.currentContact);

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
      dispatch(updateContact(contact));
    } else {
      dispatch(addContact(contact));
    }

    if (!contact.id) {
      setContact({ ...EMPTY_CONTACT });
    }
  };

  const onDelete = () => {
    dispatch(deleteContact(contact.id));
    setContact({ ...EMPTY_CONTACT });
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
          onClick={onDelete}
          value='Delete'
          style={{
            visibility: contact.id ? 'visible' : 'hidden',
          }}></input>
      </div>
    </form>
  );
}

export default ContactForm;
