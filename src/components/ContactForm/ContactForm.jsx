import { Component } from 'react';
import { createEmptyContact } from '../../functions';

import InputArea from './InputArea/InputArea';

import styles from './contactForm.module.css';

export class ContactForm extends Component {
  state = {
    ...this.props.currentContact,
  };

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearInput = event => {
    this.setState({ [event.target.previousElementSibling.name]: '' });
  };

  onSaveContact = event => {
    event.preventDefault();
    this.props.onSaveContact(this.state);

    if (this.props.currentContact.id === null) {
      this.setState(createEmptyContact());
    }
  };

  deleteContact = () => {
    this.props.onDeleteContact(this.props.currentContact.id);
  };

  render() {
    const { id } = this.props.currentContact;
    return (
      <form onSubmit={this.onSaveContact}>
        <InputArea
          name='fName'
          placeholder='First name'
          type='text'
          value={this.state.fName}
          required={true}
          inputHandler={this.inputHandler}
          onClearClick={this.clearInput}
        />

        <InputArea
          name='lName'
          placeholder='Last name'
          type='text'
          value={this.state.lName}
          required={true}
          inputHandler={this.inputHandler}
          onClearClick={this.clearInput}
        />

        <InputArea
          name='email'
          placeholder='Email'
          type='email'
          value={this.state.email}
          inputHandler={this.inputHandler}
          onClearClick={this.clearInput}
        />

        <InputArea
          name='phone'
          placeholder='Phone'
          type='tel'
          value={this.state.phone}
          inputHandler={this.inputHandler}
          onClearClick={this.clearInput}
        />

        <div className={styles.buttons}>
          <input type='submit' value='Save'></input>
          <input
            type='button'
            onClick={this.deleteContact}
            value='Delete'
            style={{
              visibility: id === null ? 'hidden' : 'visible',
            }}></input>
        </div>
      </form>
    );
  }
}

export default ContactForm;
