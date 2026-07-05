import { Component } from 'react';

import ContactItem from './ContactItem/ContactItem';

import styles from './contactList.module.css';

export class ContactList extends Component {
  render() {
    return (
      <div className={styles.contactList}>
        <ul>
          {this.props.contacts.map(contact => (
            <li
              key={contact.id}
              onDoubleClick={() => {
                this.props.onContactDoubleClick(contact.id);
              }}>
              <ContactItem
                contact={contact}
                onDeleteContact={this.props.onDeleteContact}
              />
            </li>
          ))}
        </ul>
        <button onClick={this.props.onAddNewContact}>New</button>
      </div>
    );
  }
}

export default ContactList;
