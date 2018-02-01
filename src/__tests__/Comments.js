import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Comments from '../components/Comments';

it('calls componentDidMount', () => {
    const spy = jest.spyOn(Comments.prototype,'componentDidMount');
    const wrapper = mount(<Comments />);
    expect(spy).toHaveBeenCalled();
});

it('call function setCommentsFromLocalStorage', () => {
    const wrapper = shallow(<Comments />);
    expect(wrapper.instance().setCommentsFromLocalStorage());
});

it('call function removeComment', () => {
    const wrapper = shallow(<Comments />);
    expect(wrapper.instance().removeComment());
});

it('veryfy values of tag', () => {
    const wrapper = shallow(<Comments />);
    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('h2').at(0).text()).toBe('Comments');

});


it('Comments component should render as expected',() =>{
    const component = shallow(<Comments />);
    const tree = toJSON(component);
    expect(tree).toMatchSnapshot();
});