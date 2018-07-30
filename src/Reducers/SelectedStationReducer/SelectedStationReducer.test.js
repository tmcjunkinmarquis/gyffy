import SelectedStationReducer from './SelectedStationReducer';

describe('SelectedStationReducer', () => {

  it('should return the initial state', () => {
    const expected = {};
    const result = SelectedStationReducer(undefined, {});

    expect(result).toEqual(expected);
  });
});
