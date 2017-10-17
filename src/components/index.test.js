import React from 'react';
import { shallow } from 'enzyme';

import {loadPhotos} from '../actions';
import store from '../store';

import Index from './index';

describe('When photo booth', () => {
    let dispatchMock, store;
    beforeEach(() => {
        dispatchMock = jest.fn();
        const storeGetState = jest.fn().mockReturnValueOnce({
            currentPhoto: {title: "", index: 0},
            allPhotos: []
        });

        store = {
            dispatch: dispatchMock,
            getState: storeGetState,
            subscribe: jest.fn()
        };

        shallow(<Index store={store}/>);
    });

    it('calls store dispatch with load action when mounted', () => {
        expect(dispatchMock).toHaveBeenCalledWith(loadPhotos());
    });
});


