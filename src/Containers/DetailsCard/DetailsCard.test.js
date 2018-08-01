import React from 'react';
import DetailsCard from './DetailsCard';
import { shallow } from 'enzyme';

describe('DetailsCard', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<DetailsCard />);
    expect(wrapper).toMatchSnapshot();
  });
});


