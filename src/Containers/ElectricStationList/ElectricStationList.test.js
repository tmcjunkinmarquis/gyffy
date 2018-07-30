import React from 'react';
import { ElectricStationList } from './ElectricStationsList';
import { shallow } from 'enzyme';
import { mapStateToProps } from './ElectricStationsList';

describe('ElectricStationList Container', () => {
  

  describe('ElectricStationList Component', () => {
    let wrapper;
    let mockProps;
    beforeEach(()=>{
      const mockHandleFilterClick = jest.fn();
      mockProps = {
        stations: [{ name: 'bubbas' }],
        location: '61615',
        filter: 'SHOW_ELEC'
      };
      wrapper = shallow(
        <ElectricStationList 
          {...mockProps}
          handleFilterClick={mockHandleFilterClick} />);
    });

    it('should match the snapshot', () => { 
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', ()=>{
    let wrapper;
    let mockProps;
    const mockHandleFilterClick = jest.fn();
    beforeEach(()=>{
      mockProps = {
        stations: [{name: 'bubbas'}],
        location: '61615',
        filter: 'SHOW_ELEC'
      };
      wrapper = shallow(
        <ElectricStationList 
          {...mockProps}
          handleFilterClick={mockHandleFilterClick}
        />);
    });

    it('should return an object with keys location, stations, and filter', () => {
      const mockState = {
        location: '61615',
        stations: [{name: 'bubbas'}],
        filter: 'SHOW_ELEC'
      };
      const expected = {
        location: '61615',
        stations: [{ name: 'bubbas' }],
        filter: 'SHOW_ELEC'
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  }); 
});


