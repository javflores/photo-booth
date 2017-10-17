import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';

import store from './store/index';
import * as random from './utilities/random';
import App from './App';

it('renders correctly', () => {
    const app = mount(
        <App  store={store}/>
    );
    expect(mountToJson(app)).toMatchSnapshot();
});

describe('photo booth', () => {
    let app;
    beforeAll(() => {
        random.default = jest.fn().mockReturnValue(1);
        app = mount(
            <App  store={store}/>
        );
    });

    it('navigates to next photo', () => {
        app.find('[id="next"]').first().simulate('click');
        expect(mountToJson(app)).toMatchSnapshot();
    });

    it('navigates to previous photo', () => {
        app.find('[id="previous"]').first().simulate('click');
        expect(mountToJson(app)).toMatchSnapshot();
    });

    it('navigates to random', () => {
        app.find('[id="random"]').first().simulate('click');
        expect(mountToJson(app)).toMatchSnapshot();
    });
});