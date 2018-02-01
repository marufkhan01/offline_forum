import React from 'react';
import { shallow, mount} from 'enzyme';
import toJSON from 'enzyme-to-json';
import CreateNewComment from '../components/CreateNewComment';

describe('create comment', () => {
    const wrapper = mount(<CreateNewComment postId="1" author='Morgana' updateComments={() => {}}/>);

    it('create new comment', () => {
        wrapper.find('textarea[name="comment"]').simulate('change', {
            target: {name: 'comment', value: 'Morgana comment'}
        });
        expect(wrapper.state().comment).toBe('Morgana comment');
    });


    it('CreateNewComment component should render as expected', () => {
        const component = shallow(<CreateNewComment/>);
        const tree = toJSON(component);
        expect(tree).toMatchSnapshot();
    });
});