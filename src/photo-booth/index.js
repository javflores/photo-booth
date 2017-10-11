import React, {Component} from 'react';

import Thumbnails from './thumbnails';
import Photo from './photo';
import Header from './header';
import PhotoControls from './photo-controls';
import photoReducer from './photo-reducer';

class PhotoBooth extends Component {
    constructor(props){
        super(props);
        this.state = photoReducer({
            currentPhoto: undefined,
            allPhotos: []
        }, {type: "INIT"});
    }

    dispatch(action) {
        this.setState(prevState => photoReducer(prevState, action));
    }

    thumbnailSelected(thumbnailIndex){
        this.dispatch({type: 'THUMBNAIL', thumbnailIndex: thumbnailIndex});
    }

    previous = () => {
        this.dispatch({type: 'PREVIOUS'});
    }

    next = () => {
        this.dispatch({type: 'NEXT'});
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
                    photo={this.state.currentPhoto.photo}/>
            </div>
        );
    }
}

export default PhotoBooth;
