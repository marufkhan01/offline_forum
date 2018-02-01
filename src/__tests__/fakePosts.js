import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import fakePosts from './fakePosts';



it('CreateNewPost component should render as expected',() =>{
    const component = shallow(<fakePosts />);
    const tree = toJSON(component);
    expect(tree).toMatchSnapshot();
});