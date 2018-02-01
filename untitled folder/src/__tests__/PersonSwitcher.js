import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import PersonaSwitcher from '../components/PersonaSwitcher';


it('PersonaSwitcher component should render as expected',() =>{
    const component = shallow(<PersonaSwitcher />);
    const tree = toJSON(component);
    expect(tree).toMatchSnapshot();
});