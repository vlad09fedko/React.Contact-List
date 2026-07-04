import { Component } from 'react';
import './contactItem.css';

export class ContactItem extends Component {
  render() {
    const { fName, lName, id } = this.props.contact;
    return (
      <>
        <p>{`${fName} ${lName}`}</p>
        <span
          onClick={() => {
            this.props.onDeleteContact(id);
          }}>
          X
        </span>
      </>
    );
  }
}

export default ContactItem;
