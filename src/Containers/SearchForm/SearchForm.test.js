
import React from 'react';
import { SearchForm, mapStateToProps, mapDispatchToProps } from './SearchForm';
import * as action from '../../Actions/Actions';
import { shallow } from 'enzyme';
// jest.mock('../../apiCalls/apiCalls');


describe('', ()=>{
  let wrapper;
  let mockHandleSubmitForm;
  let mockEvent;
  let mockHandleSubmit;
  let mockLoadStoreWithStations;
  let mockProps;

  beforeEach(()=>{
    mockEvent = { preventDefault: jest.fn(), target: { value: 'Denver' }};
    mockHandleSubmit = jest.fn();
    mockHandleSubmitForm = jest.fn();
    mockLoadStoreWithStations = jest.fn();
    mockProps = {
      action: '',
      className: 'search-form',
      location: '61615'
    }
    wrapper = shallow(
      <SearchForm
        onSubmit = { mockHandleSubmitForm }
        handleSubmit = {mockHandleSubmit}
        loadStoreWithStations={mockLoadStoreWithStations}
        {...mockProps}
      />);
  });
  
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it.skip('should call handleSubmit upon calling handleSubmitForm', () => {
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

    it('should call dispatch when using loadStoreWithStations from mdtp', () => {
      const actionToDispatch = action.loadStations([{name: 'bubbas'}, {name: 'bettys'}]);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadStoreWithStations([{ name: 'bubbas' }, { name: 'bettys' }]);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
