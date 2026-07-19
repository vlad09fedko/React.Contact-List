import { combineReducers } from 'redux';

import contactsReducer from './contactsReducer';
import currentContactReducer from './currentContactReducer';

export default combineReducers({
  contactsArr: contactsReducer,
  currentContactObj: currentContactReducer,
});
