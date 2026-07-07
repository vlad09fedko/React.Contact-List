import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { createEmptyContact, putToStorage } from './functions';

import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

import styles from './App.module.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(createEmptyContact());

  useEffect(() => {
    const downloadedContacts = JSON.parse(localStorage.getItem('contacts'));
    setContacts(downloadedContacts ? downloadedContacts : []);
  }, []);

  const onContactDoubleClick = id => {
    setCurrentContact(contacts.find(contact => id === contact.id));
  };

  const onDeleteContact = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    putToStorage(newContacts);
    setContacts(newContacts);
    setCurrentContact(
      currentContact.id === id ? createEmptyContact() : currentContact,
    );
  };

  const onAddNewContact = () => {
    setCurrentContact(createEmptyContact());
  };

  const onSaveBtn = formState => {
    if (currentContact.id) {
      editContact(formState);
    } else {
      createContact(formState);
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
    <div className={styles.container}>
      <h1>Contact list</h1>
      <article className={styles.listAndForm}>
        <ContactList
          contacts={contacts}
          onContactDoubleClick={onContactDoubleClick}
          onAddNewContact={onAddNewContact}
          onDeleteContact={onDeleteContact}
        />
        <ContactForm
          key={currentContact.id}
          currentContact={currentContact}
          onSaveBtn={onSaveBtn}
          onDeleteContact={onDeleteContact}
        />
      </article>
    </div>
  );
}

export default App;
