import React from 'react';
import { shallow } from 'enzyme';
import { FilterMenu, mapStateToProps } from './FilterMenu';

describe('FilterMenu Container', () => {
  let wrapper;

  describe('FilterMenu component', () => {
    beforeEach(()=>{
      wrapper = shallow(<FilterMenu />);
    });

    it('should match the snapshot', () => {

      it('should match the snapshot', () => {
        // Expectation
        expect(wrapper).toMatchSnapshot();
      });
    });   
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