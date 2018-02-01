import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import index from './index';



it('Index component should render as expected',() =>{
    const component = shallow(<index />);
    const tree = toJSON(component);
    expect(tree).toMatchSnapshot();
});