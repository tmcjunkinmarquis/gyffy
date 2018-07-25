import { combineReducers } from 'redux';
import LocationReducer from './LocationReducer/LocationReducer';
import StationsReducer from './StationsReducer/StationsReducer';
import FilterReducer from './FilterReducer/FilterReducer';
import IdReducer from './IdReducer/IdReducer';

const rootReducer = combineReducers({
  location: LocationReducer,
  stations: StationsReducer,
  filter: FilterReducer,
  id: IdReducer
});

export default rootReducer;