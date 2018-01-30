import React from 'react';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';

import Posts from '../components/Posts';



it('Posts component should render as expected',() =>{
    const component = shallow(<Posts />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});