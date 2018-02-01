import React from 'react';
import { shallow, render } from 'enzyme';
import toJSON from 'enzyme-to-json';

import AvatarSelector from '../components/AvatarSelector';



it('AvatarSelector component should render as expected',() =>{
    const component = shallow(<AvatarSelector />);
    const tree = toJSON(component);
    expect(tree).toMatchSnapshot();
});