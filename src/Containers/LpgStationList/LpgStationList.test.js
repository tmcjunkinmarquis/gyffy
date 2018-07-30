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
  
});