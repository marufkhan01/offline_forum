import React from 'react';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';

import AvatarSelector from '../components/AvatarSelector';



it('AvatarSelector component should render as expected',() =>{
    const component = shallow(<AvatarSelector />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});