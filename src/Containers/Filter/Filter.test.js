import React from 'react';
import { shallow } from 'enzyme';
import { Filter, mapDispatchToProps } from './Filter';
import { setFilter } from '../../Actions/Actions';

describe('Filter Container', () => {
  
  describe('Filter Component', () => {
    let wrapper;
    let mockHandleFilterClick;
    beforeEach(()=>{
      mockHandleFilterClick = jest.fn();
      wrapper = shallow(
        <Filter
          handleFilterClick={mockHandleFilterClick} />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapDispatchToProps', () => { 
    it('calls dispatch with a filter action when handleFilterClick is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setFilter('SHOW_LPG');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.handleFilterClick('SHOW_LPG');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });  
  });

});