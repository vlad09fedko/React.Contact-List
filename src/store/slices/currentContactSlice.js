import { createSlice } from '@reduxjs/toolkit';

import {
  CURRENT_CONTACT_SLICE_NAME,
  EMPTY_CONTACT,
} from '../../constants/constants';
import { currentContactState } from '../../model/initialStates';

const initialState = {
  currentContact: currentContactState,
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
    // deleteContact(state, { payload }) {
    //   if (state.currentContact.id === payload) {
    //     state.currentContact = EMPTY_CONTACT;
    //   }
    // },
  },
});

export const { switchModeToAddContact, chooseContact, deleteContact } =
  currentContactSlice.actions;
export default currentContactSlice.reducer;
