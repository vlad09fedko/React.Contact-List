import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import contactReducer from './slices/contactSlice';

export default configureStore({
  reducer: contactReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
