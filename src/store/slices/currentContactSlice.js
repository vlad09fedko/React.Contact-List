import { createSlice } from '@reduxjs/toolkit';

import { contactApi } from '../../api/contact-service';
import { CONTACT_SLICE_NAME, EMPTY_CONTACT } from '../../constants/constants';

const initialState = {
  currentContact: EMPTY_CONTACT,
};

const contactSlice = createSlice({
  name: CONTACT_SLICE_NAME,
  initialState,
  reducers: {
    switchModeToAddContact(state) {
      state.currentContact = EMPTY_CONTACT;
    },
    chooseContact(state, { payload }) {
      state.currentContact = payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      contactApi.endpoints.deleteContact.matchFulfilled,
      (state, { meta }) => {
        if (state.currentContact.id === meta.arg.originalArgs) {
          state.currentContact = EMPTY_CONTACT;
        }
      },
    );
  },
});

export const { switchModeToAddContact, chooseContact } = contactSlice.actions;

export default contactSlice.reducer;
