import { EMPTY_CONTACT } from '../constants/constants';

export const contactsState = [
  {
    id: 1,
    fName: '',
    lName: '',
    email: '',
    phone: '',
  },
];

export const currentContactState = { ...EMPTY_CONTACT };
