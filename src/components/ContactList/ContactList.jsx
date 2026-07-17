import propTypes from 'prop-types';

import ContactItem from './ContactItem/ContactItem';

import styles from './contactList.module.css';

function ContactList({
  contacts,
  onContactDoubleClick,
  onDeleteContact,
  onAddNewContact,
}) {
  return (
    <div className={styles.contactList}>
      {!contacts.length && <p>List is empty.</p>}
      {!!contacts.length && (
        <ul>
          {contacts.map(contact => (
            <li
              key={contact.id}
              onDoubleClick={() => {
                onContactDoubleClick(contact.id);
              }}>
              <ContactItem
                contact={contact}
                onDeleteContact={onDeleteContact}
              />
            </li>
          ))}
        </ul>
      )}
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
