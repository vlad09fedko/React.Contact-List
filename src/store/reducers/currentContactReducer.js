import { currentContactState } from '../../model/initialStates';
import ACTION_TYPES from '../actions/actionTypes';

const initialState = { currentContact: currentContactState };

export default function currentContactReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case ACTION_TYPES.CHOOSE_CONTACT:
      return { ...state, currentContact: payload };
    case ACTION_TYPES.SWITCH_MODE_TO_ADD_CONTACT:
      return { ...state, currentContact: payload };
    case ACTION_TYPES.DELETE_CONTACT:
      return {
        ...state,
        currentContact:
          payload === state.currentContact.id
            ? currentContactState
            : state.currentContact,
      };
    default:
      return state;
  }
}
