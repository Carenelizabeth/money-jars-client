import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import Forbidden from './forbidden';

Enzyme.configure({adapter: new Adapter()});

describe('<Forbidden/>', () =>{
  it('Should render without crashing', () => {
    shallow(<Forbidden />)
  })
})