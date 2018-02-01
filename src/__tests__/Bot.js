import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Bot from '../components/Bot/Bot';

it('create new messaage', () => {
    const newMessage = 'Hi';
    const wrapper = shallow(<Bot />);
    wrapper.instance().onSubmit(newMessage);
    expect(wrapper.state().messages[0].message).toContain('Hi');
});

it('check typing', ()=>{
    const wrapper = shallow(<Bot />);
    expect(wrapper.state('typing')).toBe(false);
    wrapper.instance().sendReply();
    expect(wrapper.state('typing')).toBe(true);
});

it('Bot component should render as expected',() =>{
    const component = shallow(<Bot />);
    const tree = toJSON(component);
    expect(tree).toMatchSnapshot();
});