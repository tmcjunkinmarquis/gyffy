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
})