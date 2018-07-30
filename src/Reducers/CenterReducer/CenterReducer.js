const CenterReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CENTER':
      return action.center;
    default:
      return state;
  }
};

export default CenterReducer;