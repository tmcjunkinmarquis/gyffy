export const inputLocation = (location)=>({
  type: 'INPUT_LOCATION',
  location
});

export const loadStations = (stations)=>({
  type: 'LOAD_STATIONS',
  stations
});

export const setFilter = (filter) =>({
  type: 'SET_FILTER',
  filter
});

export const setId = (id) =>({
  type: 'SET_ID',
  id
});

export const setSelectedStation = (station) => ({
  type: 'SET_SELECTED_STATION',
  station
});

// export const setCenter = (center) = ({
//   type: 'SET_CENTER',
//   center
// });