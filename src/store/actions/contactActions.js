import { EMPTY_CONTACT } from '../../constants/constants';

import ACTION_TYPES from './actionTypes';

// Getting
export const getContactsAction = () => ({
  type: ACTION_TYPES.GET_CONTACTS_ACTION,
});
export const getContactsRequest = () => ({
  type: ACTION_TYPES.GET_CONTACTS_REQUEST,
});
export const getContactsSuccess = contacts => ({
  type: ACTION_TYPES.GET_CONTACTS_SUCCESS,
  payload: contacts,
});
export const getContactsError = payload => ({
  type: ACTION_TYPES.GET_CONTACTS_ERROR,
  payload,
});

// Creating
export const createContactAction = contact => ({
  type: ACTION_TYPES.POST_CONTACT_ACTION,
  payload: contact,
});
export const createContactRequest = () => ({
  type: ACTION_TYPES.POST_CONTACT_REQUEST,
});
export const createContactSuccess = contact => ({
  type: ACTION_TYPES.POST_CONTACT_SUCCESS,
  payload: contact,
});
export const createContactError = payload => ({
  type: ACTION_TYPES.POST_CONTACT_ERROR,
  payload,
});

// Updating
export const updateContactAction = contact => ({
  type: ACTION_TYPES.PUT_CONTACT_ACTION,
  payload: contact,
});
export const updateContactRequest = () => ({
  type: ACTION_TYPES.PUT_CONTACT_REQUEST,
});
export const updateContactSuccess = contact => ({
  type: ACTION_TYPES.PUT_CONTACT_SUCCESS,
  payload: contact,
});
export const updateContactError = payload => ({
  type: ACTION_TYPES.PUT_CONTACT_ERROR,
  payload,
});

// Deleting
export const deleteContactAction = id => ({
  type: ACTION_TYPES.DELETE_CONTACT_ACTION,
  payload: id,
});
export const deleteContactRequest = () => ({
  type: ACTION_TYPES.DELETE_CONTACT_REQUEST,
});
export const deleteContactSuccess = id => ({
  type: ACTION_TYPES.DELETE_CONTACT_SUCCESS,
  payload: id,
});
export const deleteContactError = payload => ({
  type: ACTION_TYPES.DELETE_CONTACT_ERROR,
  payload,
});

export const chooseContact = contact => ({
  type: ACTION_TYPES.CHOOSE_CONTACT,
  payload: contact,
});

export const switchModeToCreateContact = () => ({
  type: ACTION_TYPES.SWITCH_MODE_TO_CREATE_CONTACT,
  payload: EMPTY_CONTACT,
});
