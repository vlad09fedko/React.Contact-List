import { useState, useEffect } from 'react';

import { createEmptyContact, putToStorage } from './functions';

import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

import styles from './App.module.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(createEmptyContact());

  useEffect(getFromStorage, []);

  function getFromStorage() {
    const downloadedContacts = JSON.parse(localStorage.getItem('contacts'));
    setContacts(downloadedContacts ? downloadedContacts : []);
  }

  const onDeleteContact = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    putToStorage(newContacts);
    setContacts(newContacts);
    setCurrentContact(
      currentContact.id === id ? createEmptyContact() : currentContact,
    );
  };

  return (
    <div className={styles.container}>
      <h1>Contact list</h1>
      <article className={styles.listAndForm}>
        <ContactList
          contacts={contacts}
          setCurrentContact={setCurrentContact}
          onDeleteContact={onDeleteContact}
        />
        <ContactForm
          key={currentContact.id}
          contacts={contacts}
          currentContact={currentContact}
          setContacts={setContacts}
          onDeleteContact={onDeleteContact}
        />
      </article>
    </div>
  );
}

export default App;
