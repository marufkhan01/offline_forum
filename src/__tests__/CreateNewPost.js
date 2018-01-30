import React from 'react';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';

import CreateNewPost from '../components/CreateNewPost';



it('CreateNewPost component should render as expected',() =>{
    const component = shallow(<CreateNewPost />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});