import { Component } from 'react';
import './contactItem.css';

export class ContactItem extends Component {
  render() {
    const contact = this.props.contact;
    return (
      <>
        <p>{`${contact.firstName} ${contact.lastName}`}</p>
        <span
          onClick={() => {
            this.props.onDeleteContact(contact.id);
          }}>
          X
        </span>
      </>
    );
  }
}

export default ContactItem;
