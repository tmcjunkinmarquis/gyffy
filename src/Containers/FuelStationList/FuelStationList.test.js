import React from 'react';
import { shallow } from 'enzyme';
import { FuelStationList, mapStateToProps, mapDispatchToProps } from './FuelStationList';

describe('FuelStationList Container', () => {
  

  describe('FuelStationList Component', () => {
    
    let wrapper;
    let mockProps;
    let mockHandleFilterClick;
    beforeEach(()=>{
      mockHandleFilterClick = jest.fn()
      mockProps = {
        stations: [{ name: 'bubbas' }],
        location: '61615',
        filter: 'SHOW_ELEC'
      }
      wrapper = shallow(
        <FuelStationList 
          handleFilterClick = {mockHandleFilterClick}
          {...mockProps}/>)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Name of the group', () => {
    
  });
});