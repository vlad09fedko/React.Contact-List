import { createSlice } from '@reduxjs/toolkit';

import {
  CURRENT_CONTACT_SLICE_NAME,
  EMPTY_CONTACT,
} from '../../constants/constants';

const initialState = {
  currentContact: { ...EMPTY_CONTACT },
};

const currentContactSlice = createSlice({
  name: CURRENT_CONTACT_SLICE_NAME,
  initialState,
  reducers: {
    switchModeToAddContact(state) {
      state.currentContact = EMPTY_CONTACT;
    },
    chooseContact(state, { payload }) {
      state.currentContact = payload;
    },
    checkWhenDeletingContact(state, { payload }) {
      if (state.currentContact.id === payload) {
        state.currentContact = EMPTY_CONTACT;
      }
    },
  },
});

export const {
  switchModeToAddContact,
  chooseContact,
  checkWhenDeletingContact,
} = currentContactSlice.actions;

export default currentContactSlice.reducer;
