import IdReducer from './IdReducer';

describe('IdReducer', () => {

  it('should return the initial state', () => {
    const expected = '';
    const result = IdReducer(undefined, '');

    expect(result).toEqual(expected);
  });
});
