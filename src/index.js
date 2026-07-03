import { v4 as uuid } from 'uuid';

class Contact {
  constructor(firstName, lastName, email, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.id = uuid();
  }
}

export default Contact;

// save btn
