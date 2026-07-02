import { Component } from 'react';

import style from './contactForm.module.css';

export class ContactForm extends Component {
  render() {
    return (
      <form>
        <div className={style.inputArea}>
          <input type='text' placeholder='First name' />
          <span>X</span>
        </div>
        <div className={style.inputArea}>
          <input type='text' placeholder='Last name' />
          <span>X</span>
        </div>
        <div className={style.inputArea}>
          <input type='email' placeholder='Email' />
          <span>X</span>
        </div>
        <div className={style.inputArea}>
          <input type='tel' placeholder='Phone' />
          <span>X</span>
        </div>
      </form>
    );
  }
}

export default ContactForm;
