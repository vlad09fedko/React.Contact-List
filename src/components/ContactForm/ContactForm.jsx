import { Component } from 'react';

import contactForm from './contactForm.module.css';

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
        'First name': this.props.currentContact?.fName || '',
        'Last name': this.props.currentContact?.lName || '',
        Email: this.props.currentContact?.email || '',
        Phone: this.props.currentContact?.phone || '',
      });
    }
  }

  saveHandler = event => {
    event.preventDefault();
    this.props.onSaveContact(
      this.state['First name'],
      this.state['Last name'],
      this.state.Email,
      this.state.Phone,
    );

    if (this.props.currentContact === null) {
      this.setState(state => {
        const emptyState = {};
        Object.keys(state).forEach(key => {
          emptyState[key] = '';
        });
        return emptyState;
      });
    }
  };

  render() {
    const { currentContact } = this.props;
    return (
      <form onSubmit={this.saveHandler}>
        {Object.keys(this.state).map(inp => (
          <div key={inp} className={contactForm.inputArea}>
            <input
              type={inp === 'Email' ? 'email' : 'text'}
              placeholder={inp}
              required={
                inp === 'First name' || inp === 'Last name' ? true : undefined
              }
              value={this.state[inp]}
              name={inp}
              onChange={event => {
                this.setState({ [event.target.name]: event.target.value });
              }}
            />
            <span
              onClick={() => {
                this.setState({ [inp]: '' });
              }}>
              X
            </span>
          </div>
        ))}

        <div className={contactForm.buttons}>
          <input type='submit' value='Save'></input>
          <input
            type='button'
            onClick={() => {
              this.props.onDeleteContact(currentContact?.id);
            }}
            value='Delete'
            style={{
              visibility: currentContact === null ? 'hidden' : 'visible',
            }}></input>
        </div>
      </form>
    );
  }
}

export default ContactForm;
