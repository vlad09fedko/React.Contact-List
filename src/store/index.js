import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import rootRecuer from './slices/contactSlice';

export default configureStore({
  reducer: rootRecuer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
