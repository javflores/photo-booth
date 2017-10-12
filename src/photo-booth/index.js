import React, {Component} from 'react';

import * as actions from './actions';

import Thumbnails from './thumbnails';
import Photo from './photo';
import Header from './header';
import PhotoControls from './photo-controls';
import photoReducer from './photo-reducer';

class PhotoBooth extends Component {
    constructor(props){
        super(props);
        this.state = photoReducer(undefined, {type: actions.INIT});
    }

    dispatch(action) {
        this.setState(prevState => photoReducer(prevState, action));
    }

    thumbnailSelected(thumbnailIndex){
        this.dispatch({type: actions.THUMBNAIL_SELECTED, thumbnailIndex: thumbnailIndex});
    }

    previous = () => {
        this.dispatch({type: actions.PREVIOUS_PHOTO});
    }

    next = () => {
        this.dispatch({type: actions.NEXT_PHOTO});
    }

    random = () => {
        this.dispatch({type: actions.RANDOM_PHOTO});
    }

    render() {
        return (
            <div>
                <Header />

                <Thumbnails
                    allPhotos={this.state.allPhotos}
                    currentPhoto={this.state.currentPhoto}
                    thumbnailSelected={(thumbnailIndex) => this.thumbnailSelected(thumbnailIndex)}/>

                <PhotoControls
                    previous={this.previous}
                    next={this.next}
                    random={this.random}/>

                <Photo
                    photo={this.state.currentPhoto}/>
            </div>
        );
    }
}

export default PhotoBooth;
