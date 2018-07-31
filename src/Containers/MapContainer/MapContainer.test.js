import React from 'react';
import { shallow } from 'enzyme';
import { MapContainer, mapStateToProps } from '../MapContainer/MapContainer';

describe('MapContainer Container', () => {

  describe('MapContainer Component', () => {
    let wrapper;
    let mockProps;
    beforeEach(()=>{
      mockProps = {
        selectedStation: { name: 'bubbas', latitude: 38.802775, longitude: -103.9944365}
      }
      wrapper = shallow(
      <MapContainer
      {...mockProps} />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });
  });

  describe('mapStateToProps', () => {
    let wrapper;
    let mockProps;
    beforeEach(() => {
      mockProps = {
        selectedStation: { name: 'bubbas', latitude: 38.802775, longitude: -103.9944365 }
      }
      wrapper = shallow(
        <MapContainer
          {...mockProps} />)
    })

    it('should return an object with keys selectedStation', () => {
      const mockState = {
        selectedStation: { name: 'bubbas', latitude: 38.802775, longitude: -103.9944365 }
      };
      const expected = {
        selectedStation: { name: 'bubbas', latitude: 38.802775, longitude: -103.9944365 }
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  }); 

  
});