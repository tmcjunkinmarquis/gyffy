import { combineReducers } from '../../../../../../Library/Caches/typescript/2.9/node_modules/redux';
import LocationReducer from './LocationReducer/LocationReducer';
import StationsReducer from './StationsReducer/StationsReducer';

const rootReducer = combineReducers({
  location: LocationReducer,
  stations: StationsReducer
});

export default rootReducer;