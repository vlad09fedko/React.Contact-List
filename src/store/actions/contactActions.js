export const getContacts = contacts => ({
  type: 'getContacts',
  payload: contacts,
});

export const addContact = contact => ({
  type: 'addContact',
  payload: contact,
});

export const changeContact = contact => ({
  type: 'changeContact',
  payload: contact,
});

export const deleteContact = id => ({
  type: 'deleteContact',
  payload: id,
});
