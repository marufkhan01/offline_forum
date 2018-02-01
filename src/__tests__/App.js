import React from 'react';
import { shallow,mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import App from '../components/App';

it('should  state with currentPersona', () => {
    const wrapper = shallow(<App />);
    const person = 'Steffe';
    wrapper.setState({ 'currentPersona': person});
    const current = wrapper.state().currentPersona;
    expect(current).toBe('Steffe');
});

it('should call componentDidMount', () => {
    const spy = jest.spyOn(App.prototype,'componentDidMount');
    const wrapper = mount(<App />);
    expect(spy).toHaveBeenCalled();
});


it('call function fetchCurrentpersona', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().fetchCurrentPersona());
});


it('call function changePage', () =>{
    const wrapper = mount(<App />);
    wrapper.setState({ currentPage: "home" });
    wrapper.instance().changePage();
    expect(wrapper.state('currentPage')).toBe("bot");
});

it('App component should render as expected',() =>{
    const wrapper = shallow(<App />);
    expect(wrapper.contains('Talk to a real human')).toBe(true);
});


it('App component should render as expected',() =>{
    const component = shallow(<App />);
    const tree = toJSON(component);
    expect(tree).toMatchSnapshot();
});