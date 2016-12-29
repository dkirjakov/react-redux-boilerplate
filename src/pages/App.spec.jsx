import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import App from './App';
import Header from '../components/Header';

describe('<App />', () => {
  it('should contain <Header />', () => {
    const wrapper = shallow(<App/>);

    expect(wrapper.find(Header)).to.be.length(1);
  });
});
