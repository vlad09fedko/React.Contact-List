import { contactsState } from '../../model/initialContacts';

const initialState = {
  contacts: contactsState,
};

export default function contactsReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case 'getContact':
      return { ...state, contacts: [...payload] };
    case 'addContact':
      return { ...state, contacts: [...state.contacts, payload] };
    case 'changeContact':
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === payload.id ? payload : contact,
        ),
      };
    case 'deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload),
      };
    default:
      return state;
  }
}
