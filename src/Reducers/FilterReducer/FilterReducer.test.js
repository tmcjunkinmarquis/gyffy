import FilterReducer from './FilterReducer';

describe('FilterReducer', () => {

  it('should return the initial state', () => {
    const expected = '';
    const result = FilterReducer(undefined, '');

    expect(result).toEqual(expected);
  });
});
