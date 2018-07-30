import { FilterMenu, mapStateToProps } from './FilterMenu';

describe('FilterMenu Container', () => {
  describe('FilterMenu component', () => {
    // Write these tests 
    
  });

  describe('mapStateToProps', () => {
    it('should return an object with the location number', () => {
      // Setup
      const mockState = {
        location: '61615'
      };
      const expected = {
        location: '61615'
      };

        // Execution
      const mappedProps = mapStateToProps(mockState);

      // Expectation
      expect(mappedProps).toEqual(expected);
    });
  });
});