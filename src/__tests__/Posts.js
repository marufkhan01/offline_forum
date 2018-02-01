import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Posts from '../components/Posts';

it('calls componentDidMount', () => {
    const spy = jest.spyOn(Posts.prototype,'componentDidMount');
    const wrapper = mount(<Posts />);
    expect(spy).toHaveBeenCalled();
});

it('call function setPostFromLocalStorage', () => {
    const wrapper = shallow(<Posts />);
    expect(wrapper.instance().setPostFromLocalStorage());
});

it('call function removePost', () => {
    const wrapper = shallow(<Posts />);
    expect(wrapper.instance().removePost());
});

it('Posts component should render as expected',() =>{
    const component = shallow(<Posts />);
    const tree = toJSON(component);
    expect(tree).toMatchSnapshot();
});