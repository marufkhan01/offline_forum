import React from 'react';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';

import PersonaSwitcher from '../components/PersonaSwitcher';



it('PersonaSwitcher component should render as expected',() =>{
    const component = shallow(<PersonaSwitcher />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});