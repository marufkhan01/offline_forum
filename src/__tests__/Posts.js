import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import * as api from '../api';


import Posts from '../components/Posts';



    it('calls componentDidMount',()=>{
    const spy = jest.spyOn(Posts.prototype, 'componentDidMount');
    const wrapper = mount(<Posts/>);
    expect(spy).toHaveBeenCalled();
    });


    it('call function setPostFromLocalStorage', () => {
    const wrapper = shallow(<Posts/>);
    expect(wrapper.instance().setPostFromLocalStorage());
    });



describe('remove post',() => {
    const post = [
        {
            id: "1", title: "Morgana", content: "Morgana  content",
        }
    ];

    it('call function removePost', () => {
        api.removePost = jest.fn();
        const wrapper = shallow(<Posts currentPersona="Morgana" postId="1"/>);
        wrapper.instance().removePost();
        expect(api.removePost).toHaveBeenCalled();

    });

    it('Posts component should render as expected', () => {
    const component = shallow(<Posts/>);
    const tree = toJSON(component);
    expect(tree).toMatchSnapshot();
    });
});
