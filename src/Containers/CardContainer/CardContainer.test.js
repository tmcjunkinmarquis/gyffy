import React from 'react';
import { shallow } from  'enzyme';
import { CardContainer, mapStateToProps } from './CardContainer';


describe('CardContainer Container', () => {
  
  describe('CardContainer Component', () => {
      let wrapper;
    beforeEach(()=>{
      wrapper = shallow(<CardContainer />)
    })

    it('should match a snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });
  });

  describe('mapStateToProps', () => {
    
    it('should return an object with the station', () => {
      // Setup
      const mockState = {
        stations: {name: 'bubbas'}
      };
      const expected = {
        stations: { name: 'bubbas' }
      };

      // Execution
      const mappedProps = mapStateToProps(mockState);

      // Expectation
      expect(mappedProps).toEqual(expected);
    });
  });

});



