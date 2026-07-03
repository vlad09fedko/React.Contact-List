import { Component } from 'react';

import ContactItem from './ContactItem/ContactItem';

import './contactList.css';

export class ContactList extends Component {
  render() {
    return (
      <div className='contact-list'>
        <ul>
          {this.props.contacts.map(contact => (
            <li
              key={contact.id}
              onDoubleClick={() => {
                this.props.сontactHandler(contact.id);
              }}>
              <ContactItem
                contact={contact}
                onDeleteContact={this.props.onDeleteContact}
              />
            </li>
          ))}
        </ul>
        <button onClick={this.props.onCreateContact}>New</button>
      </div>
    );
  }
}

export default ContactList;
