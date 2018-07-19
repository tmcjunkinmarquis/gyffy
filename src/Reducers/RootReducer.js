import { combineReducers } from 'redux';
import SearchReducer from './SearchReducer/SearchReducer';

const rootReducer = combineReducers({
  location: SearchReducer
});

export default rootReducer;