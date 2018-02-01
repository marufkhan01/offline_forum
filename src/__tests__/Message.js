import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Message from '../components/Bot/Message';

it('Message component should render as expected',() =>{
    const component = shallow(<Message />);
    const tree = toJSON(component);
    expect(tree).toMatchSnapshot();
});


