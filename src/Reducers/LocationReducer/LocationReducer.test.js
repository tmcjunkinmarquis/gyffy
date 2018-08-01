import locationReducer from './LocationReducer';

describe('locationReducer', ()=>{

  it('should return the initial state', () => {
    const expected = '';
    const result = locationReducer(undefined, '');

    expect(result).toEqual(expected);
  });
});

