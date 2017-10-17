import React from 'react';
import ReactDOM from 'react-dom';
import {loadPhotos} from '../actions';

import Index from './index';

it('calls store dispatch with load action when component is mounted', () => {
    const storeGetState = jest.fn().mockReturnValueOnce({
        currentPhoto: {title: "", index: 0},
        allPhotos: []
    }),
        dispatchMock = jest.fn();
    const store = {
        dispatch: dispatchMock,
        getState: storeGetState,
        subscribe: jest.fn()
    };

    const div = document.createElement('div');
    ReactDOM.render(<Index store={store}/>, div);

    expect(dispatchMock).toHaveBeenCalledWith(loadPhotos());
});