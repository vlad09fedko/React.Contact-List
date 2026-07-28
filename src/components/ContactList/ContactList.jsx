import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts } from '../../store/slices/contactSlice';
import { switchModeToAddContact } from '../../store/slices/currentContactSlice';

import ContactItem from './ContactItem/ContactItem';

import styles from './contactList.module.css';

function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  const contacts = useSelector(state => state.contactsArr.contacts);

  return (
    <div className={styles.contactList}>
      {!contacts.length && <p>List is empty.</p>}
      {!!contacts.length && (
        <ul>
          {contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
      <button onClick={() => dispatch(switchModeToAddContact())}>New</button>
    </div>
  );
}

export default ContactList;
