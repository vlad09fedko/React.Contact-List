import { Component } from 'react';

import ContactItem from './ContactItem/ContactItem';

import './contactList.css';

export class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(contact => (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
