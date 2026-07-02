import { Component } from 'react';
import { v4 as uuid } from 'uuid';

import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

import './App.css';

export class App extends Component {
  state = {
    contacts: [{}, {}, {}, {}],
    currentContact: {},
  };

  render() {
    return (
      <div className='container'>
        <h1>Contact list</h1>
        <article className='listAndForm'>
          <ContactList contacts={this.state.contacts} />
          <ContactForm currentContact={this.state.currentContact} />
        </article>
        <article className='buttons'>
          <button>New</button>
          <div>
            <button>Save</button>
            <button>Delete</button>
          </div>
        </article>
      </div>
    );
  }
}

export default App;
