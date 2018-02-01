import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import SingleComment from '../components/SingleComment';



    it('veryfy values of tag', () => {
        const clickFunc = jest.fn();
        const wrapper = shallow(<SingleComment onClick={clickFunc}/>);
        expect(wrapper.find('p').length).toBe(2);
        expect(wrapper.find('p').first().text()).toContain("");

    });

    it('verify class', () => {
        const clickFun = jest.fn();
        const wrapper = shallow(<SingleComment onClick={clickFun}/>);
        expect(wrapper.find('div').hasClass('py-2 border-b relative')).toBe(true);
    });


    it('SingleComment component should render as expected', () => {
        const component = shallow(<SingleComment/>);
        const tree = toJSON(component);
        expect(tree).toMatchSnapshot();
    });
