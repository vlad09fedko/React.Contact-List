import { Component } from 'react';
import Contact from './index';

import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

import './App.css';

export class App extends Component {
  state = {
    contacts: [],
    currentContact: null,
    mode: 'add',
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

  сontactHandler = id => {
    this.setState({
      currentContact: this.state.contacts.filter(
        contact => id === contact.id,
      )[0],
      mode: 'edit',
    });
  };

  onDeleteContact = id => {
    this.setState(state => {
      const contacts = state.contacts.filter(contact => contact.id !== id);
      this.pushToLocalStorage(contacts);
      return {
        contacts,
        currentContact: null,
        mode: 'add',
      };
    });
  };

  onCreateContact = () => {
    this.setState({
      currentContact: null,
      mode: 'add',
    });
  };

  onSaveContact = (...data) => {
    this.setState(state => {
      let contacts = [...state.contacts];
      if (state.mode === 'add') {
        contacts.push(new Contact(...data));
      }
      let updatedContact = null;
      if (state.mode === 'edit') {
        contacts = state.contacts.map(contact => {
          if (state.currentContact.id === contact.id) {
            updatedContact = {
              ...contact,
              firstName: data[0],
              lastName: data[1],
              email: data[2],
              phone: data[3],
            };
            return updatedContact;
          }
          return contact;
        });
      }
      this.pushToLocalStorage(contacts);
      return {
        contacts,
        currentContact: state.mode === 'add' ? null : updatedContact,
        mode: state.mode === 'add' ? 'add' : 'edit',
      };
    });
  };

  render() {
    return (
      <>
        <div className='container'>
          <h1>Contact list</h1>
          <article className='listAndForm'>
            <ContactList
              contacts={this.state.contacts}
              сontactHandler={this.сontactHandler}
              onCreateContact={this.onCreateContact}
              onDeleteContact={this.onDeleteContact}
            />
            <ContactForm
              contacts={this.state.contacts}
              currentContact={this.state.currentContact}
              mode={this.state.mode}
              onSaveContact={this.onSaveContact}
              onDeleteContact={this.onDeleteContact}
            />
          </article>
        </div>
      </>
    );
  }
}

export default App;
