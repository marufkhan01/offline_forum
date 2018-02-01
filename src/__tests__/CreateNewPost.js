import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import CreateNewPost from '../components/CreateNewPost';

describe('CreateNewPost', () => {
    let component;
    let textForm;
    const defaultState = {title:'',content: ''};
    const newPost = mount(<CreateNewPost author='Morgana' updatePosts={() => {}} />);


    beforeEach(() => {
        component = shallow(<CreateNewPost/>);
        textForm = component.find('form');
    });

    it('has default state', () => {
        expect(component.state()).toEqual(defaultState);
    });

    describe('when title  changes', () => {
        const newTitle = 'random string';
        beforeEach(() => {
            textForm.simulate('onChange', newTitle);
        });

        it('should change title and content', () => {
            newPost.find('input[name="title"]').simulate('change', {target: {name: 'title', value: 'Morgana title'}});
            newPost.find('textarea[name="content"]').simulate('change', {target: {name: 'content', value: 'Morgana content'}});
            expect(newPost.state().title).toEqual('Morgana title');
            expect(newPost.state().content).toContain('Morgana content');

        });

        it('CreateNewPost component should render as expected', () => {
            const component = shallow(<CreateNewPost/>);
            const tree = toJSON(component);
            expect(tree).toMatchSnapshot();
        });
    });

});