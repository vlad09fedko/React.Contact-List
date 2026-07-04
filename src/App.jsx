import { Component } from 'react';
import { v4 as uuid } from 'uuid';

import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

import app from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    currentContact: null,
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  pushToLocalStorage(contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  createContact = (id, fName = '', lName = '', email = '', phone = '') => ({
    id: id ? id : uuid(),
    fName,
    lName,
    email,
    phone,
  });

  сontactHandler = id => {
    this.setState({
      currentContact: this.state.contacts.filter(
        contact => id === contact.id,
      )[0],
    });
  };

  onDeleteContact = (id = null) => {
    this.setState(state => {
      const contacts = state.contacts.filter(contact => contact.id !== id);
      this.pushToLocalStorage(contacts);
      return {
        contacts,
        currentContact: null,
      };
    });
  };

  onCreateContact = () => {
    this.setState({
      currentContact: null,
    });
  };

  onSaveContact = (...data) => {
    this.setState(state => {
      let contacts = [...state.contacts];
      let editedContact = null;

      if (state.currentContact === null) {
        contacts.push(this.createContact(null, ...data));
      } else {
        const editedContacts = this.onEditContact(contacts, data);
        ({ contacts, editedContact } = editedContacts);
      }

      this.pushToLocalStorage(contacts);
      return {
        contacts,
        currentContact: editedContact,
      };
    });
  };

  onEditContact(contacts, data) {
    let editedContact = null;
    const editedContacts = contacts.map(contact => {
      if (this.state.currentContact.id === contact.id) {
        editedContact = this.createContact(contact.id, ...data);
        return editedContact;
      }
      return contact;
    });
    return { contacts: editedContacts, editedContact };
  }

  render() {
    return (
      <div className={app.container}>
        <h1>Contact list</h1>
        <article className={app.listAndForm}>
          <ContactList
            contacts={this.state.contacts}
            сontactHandler={this.сontactHandler}
            onCreateContact={this.onCreateContact}
            onDeleteContact={this.onDeleteContact}
          />
          <ContactForm
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
