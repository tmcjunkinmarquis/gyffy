import React from 'react';
import { LpgStationList, mapStateToProps, mapDispatchToProps } from './LpgStationList';
import { shallow } from 'enzyme';

describe('LpgStationList Container', () => {

  describe('LpgStationList Component', () => {
    let wrapper;
    let mockProps;
    
    beforeEach(()=>{
      const mockHandleFilterClick = jest.fn();
      mockProps = {
        stations: [{ name: 'bubbas' }],
        location: '61615',
        filter: 'SHOW_LPG'
      };
      wrapper = shallow(
        <LpgStationList 
          {...mockProps}
          handleFilterClick={mockHandleFilterClick}
        />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });


  describe('mapStateToProps', () => {
    let wrapper;
    let mockProps;
    const mockHandleFilterClick = jest.fn();
    beforeEach(() => {
      mockProps = {
        stations: [{ name: 'bubbas' }],
        location: '61615',
        filter: 'SHOW_ELEC'
      };
      wrapper = shallow(
        <LpgStationList
          {...mockProps}
          handleFilterClick={mockHandleFilterClick}
        />);
    });

    it('should return an object with keys location, stations, and filter', () => {
      const mockState = {
        location: '61615',
        stations: [{ name: 'bubbas' }],
        filter: 'SHOW_LPG'
      };
      const expected = {
        location: '61615',
        stations: [{ name: 'bubbas' }],
        filter: 'SHOW_LPG'
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  }); 
  
});