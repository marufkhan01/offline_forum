import React from 'react';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';

import CreateNewComment from '../components/CreateNewComment';






it('CreateNewComment component should render as expected',() =>{
    const component = shallow(<CreateNewComment />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});