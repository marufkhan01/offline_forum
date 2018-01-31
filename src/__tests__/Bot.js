import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Bot from '../components/Bot/Bot';

it('Button component should render as expected',() =>{
    const component = shallow(<Bot />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});