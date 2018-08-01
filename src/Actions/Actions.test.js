import * as actions from './Actions';

describe('actions', ()=>{

  it('should return a type of INPUT_LOCATION and location key', () => {
    const location = 'Denver';
    const expected = {
      type: 'INPUT_LOCATION',
      location
    };
    const result = actions.inputLocation('Denver');
  
    expect(result).toEqual(expected);
  });

  it('should return a type of LOAD_STATIONS and stations key', () => {
    const stations = [{name: 'Bubbas'}];
    const expected = {
      type: 'LOAD_STATIONS',
      stations
    };
    const result = actions.loadStations(stations);

    expect(result).toEqual(expected);
  });

  it('should return a type of SET_FILTER and filter key', () => {
    const filter = 'SHOW_LPG';
    const expected = {
      type: 'SET_FILTER',
      filter
    };
    const result = actions.setFilter(filter);

    expect(result).toEqual(expected);
  });

  it('should return a type of SET_ID and id key', () => {
    const id = 5;
    const expected = {
      type: 'SET_ID',
      id
    };
    const result = actions.setId(id);

    expect(result).toEqual(expected);
  });

  it('should return a type of SET_SELECTED_STATION and station key', () => {
    const station = { name: 'Bubbas' };
    const expected = {
      type: 'SET_SELECTED_STATION',
      station
    };
    const result = actions.setSelectedStation(station);

    expect(result).toEqual(expected);
  });
});