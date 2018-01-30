import React from 'react';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';

import SinglePost from '../components/SinglePost';



it('SinglePost component should render as expected',() =>{
    const component = shallow(<SinglePost />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});