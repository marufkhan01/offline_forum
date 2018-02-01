import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import AvatarSelector from '../components/AvatarSelector';


it('should be avatar, zac', () => {
    const wrapper = shallow(<AvatarSelector currentPersona="Zac" />);
    expect(wrapper.find("img").prop("src")).toBe("zac.png");
});

it('should be avatar, esmeralda', () => {
    const wrapper = shallow(<AvatarSelector currentPersona="Esmeralda" />);
    expect(wrapper.find("img").prop("src")).toBe("esmeralda.png");
});

it('should be avatar, morgana', () => {
    const wrapper = shallow(<AvatarSelector currentPersona="Morgana" />);
    expect(wrapper.find("img").prop("src")).toBe("morgana.png");
});

it('AvatarSelector component should render as expected',() =>{
    const component = shallow(<AvatarSelector />);
    const tree = toJSON(component);
    expect(tree).toMatchSnapshot();
});