import StationsReducer from './StationsReducer';

describe('StationsReducer', () => {

  it('should return the initial state', () => {
    const expected = [];
    const result = StationsReducer(undefined, []);

    expect(result).toEqual(expected);
  });
});
