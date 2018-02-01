import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Button from '../components/Button';


describe('button classes', () => {
    const defaultStyle = 'bg-indigo-dark hover:bg-indigo-darker text-white font-bold py-2 px-4 rounded-full';
    const dangerStyle = 'bg-red-dark hover:bg-red-darker text-white font-bold py-2 px-4 rounded-full';


it('default color ', () => {
    const wrapper = shallow(<Button danger={false} onClick={() => { }} />);
    expect(wrapper.find('[data-test="button"]').hasClass(defaultStyle)).toBe(true);
});

it('default color ', () => {
        const wrapper = shallow(<Button danger={true} onClick={() => { }} />);
        expect(wrapper.find('[data-test="button"]').hasClass(dangerStyle)).toBe(true);
});


it('call click', () => {
    const clickFunc = jest.fn();
    const wrapper = shallow(<Button onClick={clickFunc}/>);
    wrapper.find('button').simulate('click');
    expect(clickFunc).toHaveBeenCalled();
});

it('Button component should render as expected',() =>{
    const component = shallow(<Button />);
    const tree = toJSON(component);
    expect(tree).toMatchSnapshot();
});

});