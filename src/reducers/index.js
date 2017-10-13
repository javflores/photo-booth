import * as actions from '../actions/index';

import load from './load';
import thumbnailSelected from './thumbnail-selected';
import previous from './previous';
import next from './next';
import random from './random';


const initialState = {
    currentPhoto: undefined,
    allPhotos: []
};

export default function(state = initialState, action){
    switch(action.type){
        case actions.LOAD:
            return load(state, action);

        case actions.THUMBNAIL_SELECTED:
            return thumbnailSelected(state, action);

        case actions.PREVIOUS_PHOTO:
            return previous(state, action);

        case actions.NEXT_PHOTO:
            return next(state, action);

        case actions.RANDOM_PHOTO:
            return random(state, action);

        default:
            return state;
    }
};


