
import React from 'react';
import { SearchForm, mapDispatchToProps } from './SearchForm.js';
import * as action from '../../Actions/Actions';
import {shallow, mount} from 'enzyme';


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

  // it('When clicked, enter button should update component state', () => {
  //   let button;
  //   const mockInitialState = { value: '' };
  //   wrapper.setState({ mockInitialState });

  //   expect(wrapper.state('value')).toEqual('');

  //   button = wrapper.find('button');
  //   button.simulate('submit', mockEvent);
    
  //   expect(wrapper.instance().props.handleSubmit).toHaveBeenCalled();
  //   // expect(wrapper.state().value.target.value).toEqual('Denver')
  // });

  // it('should update store, key of location, when spy is called', () => {
  //   wrapper = mount(<SearchForm 
  //     handleSubmit={mockHandleSubmit}
  //     onSubmit={mockHandleSubmitForm}
  //   />);
  //   wrapper.setState({ value: '' });
  //   // wrapper.setState({ value: 'Denver' });
  //   const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
  //   wrapper.update();
  //   wrapper.find('.search-form').simulate('submit', mockEvent);
  //   expect(spy).toHaveBeenCalled();
  // });

  describe('mapDispatchToProps', ()=>{
    let mockDispatch;
    let wrapper;
    let mockEvent;
    
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
