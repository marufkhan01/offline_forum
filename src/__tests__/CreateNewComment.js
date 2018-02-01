import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import CreateNewComment from '../components/CreateNewComment';



it('CreateNewComment component should render as expected',() =>{
    const component = shallow(<CreateNewComment />);
    const tree = toJSON(component);
    expect(tree).toMatchSnapshot();
});
