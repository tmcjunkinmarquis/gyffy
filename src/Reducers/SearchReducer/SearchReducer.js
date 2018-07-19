const SearchReducer = (state = {}, action)=>{
  switch (action.type) {
    case 'LOCATION_SEARCH':
      return {...state, location: action.location};
    default:
      return {};
  }
};

export default SearchReducer;