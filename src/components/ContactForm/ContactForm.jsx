import { Component } from 'react';

import style from './contactForm.module.css';

export class ContactForm extends Component {
  state = {
    'First name': '',
    'Last name': '',
    Email: '',
    Phone: '',
  };

  componentDidUpdate(prevProps) {
    if (this.props.currentContact !== prevProps.currentContact) {
      this.setState({
        'First name': this.props.currentContact?.firstName || '',
        'Last name': this.props.currentContact?.lastName || '',
        Email: this.props.currentContact?.email || '',
        Phone: this.props.currentContact?.phone || '',
      });
    }
  }

  inputHandler = event => {
    if (event.target.name !== 'Phone') {
      this.setState({
        [event.target.name]: event.target.value,
      });
    } else {
      this.setState(() => {
        if (/^\d{0,12}$/.test(event.target.value)) {
          return {
            Phone: event.target.value,
          };
        }
      });
    }
  };

  clearInput = inp => {
    this.setState({
      [inp]: '',
    });
  };

  saveHandler = event => {
    event.preventDefault();
    this.props.onSaveContact(
      this.state['First name'],
      this.state['Last name'],
      this.state.Email,
      this.state.Phone,
    );
    if (this.props.mode === 'add') {
      this.setState({
        'First name': '',
        'Last name': '',
        Email: '',
        Phone: '',
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.saveHandler}>
        {Object.keys(this.state).map(inp => (
          <div key={inp} className={style.inputArea}>
            <input
              type={inp === 'Email' ? 'email' : 'text'}
              placeholder={inp}
              required={
                inp === 'First name' || inp === 'Last name' ? true : undefined
              }
              value={this.state[inp]}
              name={inp}
              onChange={this.inputHandler}
            />
            <span onClick={() => this.clearInput(inp)}>X</span>
          </div>
        ))}
        <div className={style.buttons}>
          <input type='submit' value='Save'></input>
          <input
            type='button'
            onClick={() => {
              this.props.onDeleteContact(this.props.currentContact?.id || null);
            }}
            value='Delete'
            style={{
              visibility: this.props.mode === 'add' ? 'hidden' : 'visible',
            }}></input>
        </div>
      </form>
    );
  }
}

export default ContactForm;
