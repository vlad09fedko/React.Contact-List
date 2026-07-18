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
            <ContactItem
              key={contact.id}
              contact={contact}
              onContactDoubleClick={onContactDoubleClick}
              onDeleteContact={onDeleteContact}
            />
          ))}
        </ul>
      )}
      <button onClick={onAddNewContact}>New</button>
    </div>
  );
}

export default ContactList;
