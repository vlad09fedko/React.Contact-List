import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import contactReducer from './slices/contactSlice';
import currentContactReducer from './slices/currentContactSlice';

export default configureStore({
  reducer: {
    contactsArr: contactReducer,
    currentContactObj: currentContactReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
