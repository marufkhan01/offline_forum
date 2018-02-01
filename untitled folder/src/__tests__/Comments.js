import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import* as api from '../api';
import Comments from '../components/Comments';

describe('Comments', () => {
    const comment = [
        {
            postId:"1",
            author:"Morgana",
            currentPersona:"Morgana"
        }
    ];


    it('calls componentDidMount', () => {
        const spy = jest.spyOn(Comments.prototype, 'componentDidMount');
        const wrapper = mount(<Comments/>);
        expect(spy).toHaveBeenCalled();
    });

    it('call function setCommentsFromLocalStorage', () => {
        const wrapper = shallow(<Comments/>);
        expect(wrapper.instance().setCommentsFromLocalStorage());
    });

    it('call function removeComment', () => {
        api.removeComment = jest.fn();
        const wrapper = shallow(<Comments postId="1" author="Morgana" currentPersona="Morgana"/>);
        wrapper.instance().removeComment();
        expect(api.removeComment).toHaveBeenCalled();

    });

    it('veryfy values of tag', () => {
        const wrapper = shallow(<Comments/>);
        expect(wrapper.find('h2').length).toBe(1);
        expect(wrapper.find('h2').at(0).text()).toBe('Comments');

    });

    it('verify class', () => {
        const clickFun = jest.fn();
        const wrapper = shallow(<Comments onClick={clickFun}/>);
        expect(wrapper.find('div').hasClass('py-2')).toBe(true);
    });

    it('Comments component should render as expected', () => {
        const component = shallow(<Comments/>);
        const tree = toJSON(component);
        expect(tree).toMatchSnapshot();
    });
});