import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getContactsAction,
  switchModeToCreateContact,
} from '../../store/actions/contactActions';

import ContactItem from './ContactItem/ContactItem';

import styles from './contactList.module.css';

function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsAction());
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
      <button onClick={() => dispatch(switchModeToCreateContact())}>New</button>
    </div>
  );
}

export default ContactList;
