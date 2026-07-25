import { contactsState } from '../../model/initialStates';
import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  contacts: contactsState,
  isPending: false,
  error: null,
};

export default function contactsReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    // Request
    case ACTION_TYPES.GET_CONTACTS_REQUEST:
    case ACTION_TYPES.POST_CONTACT_REQUEST:
    case ACTION_TYPES.PUT_CONTACT_REQUEST:
    case ACTION_TYPES.DELETE_CONTACT_REQUEST:
      return { ...state, isPending: true };

    // Success
    case ACTION_TYPES.GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: [...payload],
        isPending: false,
      };
    case ACTION_TYPES.POST_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: [...state.contacts, payload],
        isPending: false,
      };
    case ACTION_TYPES.PUT_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === payload.id ? payload : contact,
        ),
        isPending: false,
      };
    case ACTION_TYPES.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload),
        isPending: false,
      };

    // Error
    case ACTION_TYPES.GET_CONTACTS_ERROR:
    case ACTION_TYPES.POST_CONTACT_ERROR:
    case ACTION_TYPES.PUT_CONTACT_ERROR:
    case ACTION_TYPES.DELETE_CONTACT_ERROR:
      return { ...state, isPending: false, error: payload };

    default:
      return state;
  }
}
