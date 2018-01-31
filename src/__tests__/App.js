import React from 'react';
import { shallow,mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../components/App';



it('should call componentDidMount', () => {
    const spy = jest.spyOn(App.prototype,'componentDidMount');
    const wrapper = mount(<App />);
    expect(spy).toHaveBeenCalled();
});


it('call function fetchCurrentpersona', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().fetchCurrentPersona());
});


it('call function changePage', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().changePage());
});

it('App component should render as expected',() =>{
    const wrapper = shallow(<App />);
    expect(wrapper.contains('Talk to a real human')).toBe(true);
});

it('App component should render as expected',() =>{
    const component = shallow(<App />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});