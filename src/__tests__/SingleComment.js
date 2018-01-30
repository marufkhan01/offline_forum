import React from 'react';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';

import SingleComment from '../components/SingleComment';



it('SingleComment component should render as expected',() =>{
    const component = shallow(<SingleComment />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});