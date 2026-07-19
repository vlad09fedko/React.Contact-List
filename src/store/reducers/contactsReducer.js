import { contactsState } from '../../model/initialStates';
import ACTION_TYPES from '../actions/actionTypes';

const initialState = { contacts: contactsState };

export default function contactsReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case ACTION_TYPES.GET_CONTACTS:
      return { ...state, contacts: [...payload] };
    case ACTION_TYPES.ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, payload] };
    case ACTION_TYPES.CHANGE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === payload.id ? payload : contact,
        ),
      };
    case ACTION_TYPES.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload),
      };
    default:
      return state;
  }
}
