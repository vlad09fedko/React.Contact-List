import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import { createEmptyContact, putToStorage } from './functions';

import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

import styles from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    currentContact: createEmptyContact(),
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts: [...contacts] });
    } else {
      this.setState({ contacts: [] });
    }
  }

  onContactDoubleClick = id => {
    this.setState({
      currentContact: this.state.contacts.find(contact => id === contact.id),
    });
  };

  onDeleteContact = id => {
    this.setState(state => {
      const contacts = state.contacts.filter(contact => contact.id !== id);
      putToStorage(contacts);
      return {
        contacts,
        currentContact:
          this.state.currentContact.id === id
            ? createEmptyContact()
            : this.state.currentContact,
      };
    });
  };

  onAddNewContact = () => {
    this.setState({
      currentContact: createEmptyContact(),
    });
  };

  onSaveContact = formState => {
    if (this.state.currentContact.id) {
      this.editContact(formState);
    } else {
      this.createContact(formState);
    }
  };

  createContact = formState => {
    this.setState(state => {
      const newContact = {
        ...formState,
        id: uuid(),
      };
      const contacts = [...state.contacts, newContact];

      putToStorage(contacts);
      return { contacts };
    });
  };

  editContact = formState => {
    this.setState(state => {
      const id = state.currentContact.id
      const editedContact = {
        ...formState,
        id,
      };
      const contacts = state.contacts.map(contact => {
        if (editedContact.id === contact.id) {
          return editedContact;
        }
        return contact;
      });

      putToStorage(contacts);
      return { contacts, currentContact: editedContact };
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <h1>Contact list</h1>
        <article className={styles.listAndForm}>
          <ContactList
            contacts={this.state.contacts}
            onContactDoubleClick={this.onContactDoubleClick}
            onAddNewContact={this.onAddNewContact}
            onDeleteContact={this.onDeleteContact}
          />
          <ContactForm
            key={this.state.currentContact.id}
            currentContact={this.state.currentContact}
            onSaveContact={this.onSaveContact}
            onDeleteContact={this.onDeleteContact}
          />
        </article>
      </div>
    );
  }
}

export default App;
