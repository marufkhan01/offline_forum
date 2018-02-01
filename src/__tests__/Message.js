import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Message from '../components/Bot/Message';

describe('classes', () => {
    const Style = 'bg-indigo-dark text-white';
    const BotStyle = 'bg-white text-grey-darker';

    it('stylish text', () => {
        const wrapper = shallow(<Message bot={false} message="Hi"/>);
        expect(wrapper.find('p').first().hasClass(Style)).toBe(true);

    });

    it('Botstylish text', () => {
        const wrapper = shallow(<Message bot={true} message="Hi"/>);
        expect(wrapper.find('p').first().hasClass(BotStyle)).toBe(true);

    });
    it('Message component should render as expected', () => {
        const component = shallow(<Message/>);
        const tree = toJSON(component);
        expect(tree).toMatchSnapshot();
    });
});

