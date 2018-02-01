import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import SingleComment from '../components/SingleComment';



it('SingleComment component should render as expected',() =>{
    const component = shallow(<SingleComment />);
    const tree = toJSON(component);
    expect(tree).toMatchSnapshot();
});