
import React from 'react';
import { SearchForm, mapDispatchToProps } from './SearchForm.js';
import * as action from '../../Actions/Actions';
import {shallow } from 'enzyme';
// jest.mock('../../apiCalls/apiCalls');


describe('', ()=>{
  let wrapper;
  let mockHandleSubmitForm;
  let mockEvent;
  let mockHandleSubmit;

  beforeEach(()=>{
    mockEvent = { preventDefault: jest.fn(), target: { value: 'Denver' }};
    mockHandleSubmit = jest.fn();
    mockHandleSubmitForm = jest.fn();
    wrapper = shallow(< SearchForm
      onSubmit = { mockHandleSubmitForm }
      handleSubmit = {mockHandleSubmit}
    />);
  });
  
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should call handleSubmit upon calling handleSubmitForm', () => {
    const mockInitialState = { value: ''};
    wrapper.setState({mockInitialState});

    expect(wrapper.state('value')).toEqual('');

    wrapper.find('.search-form').simulate('submit', mockEvent);
    
    expect(wrapper.instance().props.handleSubmit).toHaveBeenCalled();
    // expect(wrapper.state().value.target.value).toEqual('Denver')
  });

  

  describe('mapDispatchToProps', ()=>{
    let mockDispatch;
    
    beforeEach(()=>{
      mockDispatch = jest.fn();
    });

    it('should call dispatch when using handleSubmit from mdtp', () => {
      const actionToDispatch = action.inputLocation('Denver');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.handleSubmit('Denver');

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);  
    });
  });
});
