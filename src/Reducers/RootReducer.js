import { combineReducers } from 'redux';
import LocationReducer from './LocationReducer/LocationReducer';

const rootReducer = combineReducers({
  location: LocationReducer
});

export default rootReducer;