import React from 'react';
import { LpgStationList, mapStateToProps, mapDispatchToProps } from './LpgStationList';
import { shallow } from 'enzyme';
import { setFilter } from '../../Actions/Actions';

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

  describe('mapDispatchToProps', () => {
    let wrapper;
    let mockProps;
    const mockHandleFilterClick = jest.fn();

    beforeEach(() => {
      mockProps = {
        stations: [{ name: 'bubbas' }],
        location: '61615',
        filter: 'SHOW_LPG'
      };
      wrapper = shallow(
        <LpgStationList
          handleFilterClick={mockHandleFilterClick}
          {...mockProps}
        />);
    });

    it('calls dispatch with a setFilter action when handleFilterClick is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setFilter('SHOW_LPG');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.handleFilterClick('SHOW_LPG');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  }); 
  
});