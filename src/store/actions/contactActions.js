import ACTION_TYPES from './actionTypes';
import { emptyContact } from '../../constants/constants';

export const getContacts = contacts => ({
  type: ACTION_TYPES.GET_CONTACTS,
  payload: contacts,
});

export const chooseContact = contact => ({
  type: ACTION_TYPES.CHOOSE_CONTACT,
  payload: contact,
});

export const switchModeToAddContact = () => ({
  type: ACTION_TYPES.SWITCH_MODE_TO_ADD_CONTACT,
  payload: emptyContact,
});

export const addContact = contact => ({
  type: ACTION_TYPES.ADD_CONTACT,
  payload: contact,
});

export const changeContact = contact => ({
  type: ACTION_TYPES.CHANGE_CONTACT,
  payload: contact,
});

export const deleteContact = id => ({
  type: ACTION_TYPES.DELETE_CONTACT,
  payload: id,
});
