import { useState, useEffect } from 'react';

import api from './api/contact-service';
import createEmptyContact from './createEmptyContact';

import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

import styles from './App.module.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(createEmptyContact());

  useEffect(() => {
    api.get('/').then(({ data }) => {
      setContacts(data ? data : []);
    });
  }, []);

  const onContactDoubleClick = id => {
    setCurrentContact(contacts.find(contact => id === contact.id));
  };

  const onDeleteContact = id => {
    api
      .delete(`/${id}`)
      .then(({ data }) => {
        setContacts(contacts.filter(contact => contact.id !== data.id));
        setCurrentContact(
          currentContact.id === data.id ? createEmptyContact() : currentContact,
        );
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  const onAddNewContact = () => {
    setCurrentContact(createEmptyContact());
  };

  const saveContact = contact => {
    currentContact.id ? editContact(contact) : createContact(contact);
  };

  const createContact = newContact => {
    api.post('/', newContact).then(({ data }) => {
      setContacts([...contacts, data]);
    });
  };

  const editContact = editedContact => {
    api
      .put(`/${currentContact.id}`, editedContact)
      .then(({ data }) => {
        setContacts(
          contacts.map(contact =>
            contact.id === editedContact.id ? data : contact,
          ),
        );
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
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
          currentContact={currentContact}
          saveContact={saveContact}
          onDeleteContact={onDeleteContact}
        />
      </article>
    </div>
  );
}

export default App;
