import React from 'react';
import { shallow } from 'enzyme';
import { Station, mapDispatchToProps } from './StationCard';
import { setId } from '../../Actions/Actions';

describe('StationCard', () => {
  
  describe('Station', ()=>{
    let wrapper;
    let mockSetId;
    let mockSetSelectedStation;
    let mockProps;

    beforeEach(()=>{
      mockSetId = jest.fn();
      mockSetSelectedStation = jest.fn();
      mockProps = {
        station:{name: 'Bubbas',
          address: '123 right here',
          fuelType: 'ELEC',
          connectorTypes: [''],
          id: 3}
      };
      wrapper = shallow(
        <Station 
          setId = {mockSetId}
          setSelectedStation = {mockSetSelectedStation}
          {...mockProps}
        />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapDispatchToProps', () => {
    let wrapper;
    let mockSetId;
    let mockSetSelectedStation;
    let mockProps;

    beforeEach(()=>{
      mockProps = {
        station: {
          name: 'Bubbas',
          address: '123 right here',
          fuelType: 'ELEC',
          connectorTypes: [''],
          id: 3
        }
      };
      wrapper = shallow(
        <Station
          setId={mockSetId}
          setSelectedStation={mockSetSelectedStation}
          
          {...mockProps}
        />);

      mockSetId = jest.fn();
      mockSetSelectedStation = jest.fn();
      
    });
    
    it('calls dispatch with a setId action when handleClick is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setId(5); 
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setId(5);
  
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });  
  }); 
});
