import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Bot from '../components/Bot/Bot';

it('Bot component should render as expected',() =>{
    const component = shallow(<Bot />);
    const tree = toJSON(component);
    expect(tree).toMatchSnapshot();
});