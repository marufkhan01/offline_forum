import React from 'react';
import { shallow, render } from 'enzyme';
import toJSON from 'enzyme-to-json';

import CreateNewPost from '../components/CreateNewPost';

describe('CreateNewPost', () => {
    let component;
    let textForm;
    const defaultState = {title:'',content: ''};

    beforeEach(() => {
        component = shallow(<CreateNewPost/>);
        textForm = component.find('form');
    });

    it('has default state', () => {
        expect(component.state()).toEqual(defaultState);
    });

    describe('when title changes', () => {
        const newTitle = 'random string';
        beforeEach(() => {
            textForm.simulate('onChange', newTitle);
        });



        it('CreateNewPost component should render as expected', () => {
            const component = shallow(<CreateNewPost/>);
            const tree = toJSON(component);
            expect(tree).toMatchSnapshot();
        });
    });

});