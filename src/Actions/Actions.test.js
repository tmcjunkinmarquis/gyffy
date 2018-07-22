import * as actions from './Actions';

describe('actions', ()=>{

  it('should return a type of INPUT_LOCATION and location key',() => {
    const location = 'Denver';
    const expected = {
      type: 'INPUT_LOCATION',
      location
    };
    const result = actions.inputLocation('Denver');
  
    expect(result).toEqual(expected);
  });

});