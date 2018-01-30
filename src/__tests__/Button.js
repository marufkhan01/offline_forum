import React from 'react';
import { shallow,mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from '../components/Button';


it('simulate click event of button', () => {
    const wrapper = mount(<Button onClick={() => {}} />);
    expect(wrapper.props().danger).toBe(false);
});





it('Button component should render as expected',() =>{
    const component = shallow(<Button />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});