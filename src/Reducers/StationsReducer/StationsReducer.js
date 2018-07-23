const StationsReducer = (state = [], action)=>{
  switch (action.type) {
    case 'LOAD_STATIONS':
     
      return action.stations;
    default:
      return state;
  }
};

export default StationsReducer;