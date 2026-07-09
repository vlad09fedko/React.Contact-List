import propTypes from 'prop-types';

import { createEmptyContact } from '../../functions';

import ContactItem from './ContactItem/ContactItem';

import styles from './contactList.module.css';

function ContactList(props) {
  const { contacts, setCurrentContact, onDeleteContact } = props;

  const onContactDoubleClick = id => {
    setCurrentContact(contacts.find(contact => id === contact.id));
  };

  const onAddNewContact = () => {
    setCurrentContact(createEmptyContact());
  };

  return (
    <div className={styles.contactList}>
      <ul>
        {contacts.map(contact => (
          <li
            key={contact.id}
            onDoubleClick={() => {
              onContactDoubleClick(contact.id);
            }}>
            <ContactItem contact={contact} onDeleteContact={onDeleteContact} />
          </li>
        ))}
      </ul>
      <button onClick={onAddNewContact}>New</button>
    </div>
  );
}

ContactList.propTypes = {
  contacts: propTypes.array,
};

ContactList.defaultProps = {
  contacts: [],
};

export default ContactList;
