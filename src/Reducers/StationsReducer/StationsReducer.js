const StationsReducer = (state = [], action)=>{
  switch (action.type) {
    case 'LOAD_STATIONS':
     
      return [...state, ...action.stations];
    default:
      return state;
  }
};

export default StationsReducer;