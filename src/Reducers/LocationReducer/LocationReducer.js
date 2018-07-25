const LocationReducer = (state = '', action) => {
  switch (action.type) {
    case 'INPUT_LOCATION':
      return action.location;
    default:
      return state;
  }
};

export default LocationReducer;