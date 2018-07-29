const SelectedStationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SELECTED_STATION':
      return action.station;
    default:
      return state;
  }
};

export default SelectedStationReducer;