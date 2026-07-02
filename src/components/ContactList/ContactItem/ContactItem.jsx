import { Component } from 'react';
import './contactItem.module.css';

export class ContactItem extends Component {
  render() {
    return (
      <>
        <p>{`${this.props.firstName} ${this.props.lastName}`}</p>
        <span>X</span>
      </>
    );
  }
}

export default ContactItem;
