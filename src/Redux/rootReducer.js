import { combineReducers } from 'redux';
import contactsReducer from './contactSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;