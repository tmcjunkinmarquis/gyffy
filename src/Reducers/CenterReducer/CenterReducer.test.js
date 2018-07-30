import CenterReducer from './CenterReducer';

describe('CenterReducer', () => {

  it('should return the initial state', () => {
    const expected = {};
    const result = CenterReducer(undefined, {});

    expect(result).toEqual(expected);
  });
});
