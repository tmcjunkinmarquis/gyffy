import locationReducer from './LocationReducer';
import * as actions from '../../Actions/Actions';

describe('locationReducer', ()=>{

  it('should return the initial state', () => {
    const expected = '';
    const result = locationReducer(undefined, '');

    expect(result).toEqual(expected);
  });
});

