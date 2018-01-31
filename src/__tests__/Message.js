import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Message from '../components/Bot/Message';

it('Button component should render as expected',() =>{
    const component = shallow(<Message />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});


