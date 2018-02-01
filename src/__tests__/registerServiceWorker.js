import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import registerServiceWorker from './registerServiceWorker';



it('CreateNewPost component should render as expected',() =>{
    const component = shallow(<registerServiceWorker />);
    const tree = toJSON(component);
    expect(tree).toMatchSnapshot();
});