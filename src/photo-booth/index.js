import React, {Component} from 'react';

import Thumbnails from './thumbnails';
import Photo from './photo';
import Header from './header';
import PhotoControls from './photo-controls';
import PhotoStore from './photo-store';

class PhotoBooth extends Component {
    constructor(props){
        super(props);
        this.photoStore = new PhotoStore(this.storeUpdated);
        this.state = {
            currentPhoto: 1,
            allPhotos: this.photoStore.getAllPhotos()
        };
    }

    storeUpdated = (currentPhoto) => {
        this.setState({
            currentPhoto: currentPhoto
        })
    }

    render() {
        return (
            <div>

                <Header />

                <Thumbnails
                    allPhotos={this.state.allPhotos}
                    currentPhoto={this.state.currentPhoto}
                    photoSelected={(photo) => this.photoStore.photoSelected(photo)}/>

                <PhotoControls
                    previous={() => this.photoStore.previous()}
                    next={() => this.photoStore.next()}/>

                <Photo
                    photo={this.photoStore.getPhotoMetadata(this.state.currentPhoto)}/>
            </div>
        );
    }
}

export default PhotoBooth;
