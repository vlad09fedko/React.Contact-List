import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import { contactApi } from '../api/contactApi';
import currentContact from './slices/currentContactSlice';

export default configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    currentContact,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactApi.middleware, logger),
});
