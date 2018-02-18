import { combineReducers } from 'redux';
import { establishConnectionReducer } from './establishConnectionReducer';

export default combineReducers({
  establishConnectionReducer: establishConnectionReducer
});
