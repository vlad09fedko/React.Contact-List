import { EMPTY_CONTACT } from '../constants/constants';

export const contactsState = [
  {
    id: 0,
    fName: '',
    lName: '',
    email: '',
    phone: '',
  },
];

export const currentContactState = { ...EMPTY_CONTACT };
