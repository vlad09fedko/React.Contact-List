import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import api from '../../api/contact-service';
import { CONTACT_SLICE_NAME } from '../../constants/constants';
import { contactsState } from '../../model/initialStates';

const initialState = {
  contacts: contactsState,
  isPending: false,
  error: null,
};

export const getContacts = createAsyncThunk(
  `${CONTACT_SLICE_NAME}/getContacts`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/${CONTACT_SLICE_NAME}`);
      if (response.status >= 400)
        throw new Error(
          `Can't get contacts. Error status is ${response.status}`,
        );
      return response.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
);

export const addContact = createAsyncThunk(
  `${CONTACT_SLICE_NAME}/addContact`,
  async (contact, { rejectWithValue }) => {
    try {
      const response = await api.post(`/${CONTACT_SLICE_NAME}`, contact);
      if (response.status >= 400)
        throw new Error(
          `Can't add contact. Error status is ${response.status}`,
        );
      return response.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
);

export const updateContact = createAsyncThunk(
  `${CONTACT_SLICE_NAME}/updateContact`,
  async (contact, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `/${CONTACT_SLICE_NAME}/${contact.id}`,
        contact,
      );
      if (response.status >= 400)
        throw new Error(
          `Can't change contact. Error status is ${response.status}`,
        );
      return response.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  `${CONTACT_SLICE_NAME}/deleteContact`,
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/${CONTACT_SLICE_NAME}/${id}`);
      if (response.status >= 400)
        throw new Error(
          `Can't delete contact. Error status is ${response.status}`,
        );
      return response.data.id;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
);

const setFulfilled = state => {
  state.isPending = false;
  state.error = null;
};
const setError = (state, { payload }) => {
  state.isPending = false;
  state.error = payload;
};
const setPending = state => {
  state.isPending = true;
  state.error = null;
};

const contactSlice = createSlice({
  name: CONTACT_SLICE_NAME,
  initialState,
  extraReducers: builder => {
    // Getting
    builder.addCase(getContacts.fulfilled, (state, { payload }) => {
      setFulfilled(state);
      state.contacts = payload;
    });
    builder.addCase(getContacts.rejected, setError);
    builder.addCase(getContacts.pending, setPending);

    // Creating
    builder.addCase(addContact.fulfilled, (state, { payload }) => {
      setFulfilled(state);
      state.contacts.push(payload);
    });
    builder.addCase(addContact.rejected, setError);
    builder.addCase(addContact.pending, setPending);

    // Updating
    builder.addCase(updateContact.fulfilled, (state, { payload }) => {
      setFulfilled(state);
      state.contacts = state.contacts.map(contact =>
        contact.id === payload.id ? payload : contact,
      );
    });
    builder.addCase(updateContact.rejected, setError);
    builder.addCase(updateContact.pending, setPending);

    // Deleting
    builder.addCase(deleteContact.fulfilled, (state, { payload }) => {
      setFulfilled(state);
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    });
    builder.addCase(deleteContact.rejected, setError);
    builder.addCase(deleteContact.pending, setPending);
  },
});

export default contactSlice.reducer;
