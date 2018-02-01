import React from 'react';
import { shallow,mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import SinglePost from '../components/SinglePost';



it('veryfy values of tag', () => {
    const clickFunc = jest.fn();
    const wrapper = shallow(<SinglePost onClick={clickFunc}/>);
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('p').first().text()).toContain("Posted by");

});

it('verify class', () => {
    const clickFunc = jest.fn();
    const wrapper = shallow(<SinglePost onClick={clickFunc} />);
    expect(wrapper.find('div').hasClass('w-full shadow p-6 m-6 border rounded relative')).toBe(true);
});



it('SinglePost component should render as expected',() =>{
    const component = shallow(<SinglePost  />);
    const tree = toJSON(component);
    expect(tree).toMatchSnapshot();
});
