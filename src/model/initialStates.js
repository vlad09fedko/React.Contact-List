import { emptyContact } from '../constants/constants';

export const contactsState = [
  {
    id: 1,
    fName: '',
    lName: '',
    email: '',
    phone: '',
  },
];

export const currentContactState = { ...emptyContact };
