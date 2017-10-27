import React, {Component} from 'react';

import Thumbnails from './thumbnails';
import Photo from './photo';
import Header from './header';
import PhotoControls from './photo-controls';

class PhotoBooth extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentPhoto: 1
        };
    }

    photoSelected = (photoSelected) => {
        this.setState({
            currentPhoto: photoSelected
        });
    }

    isFirstPhoto(){
        return this.state.currentPhoto === 1;
    }

    isLastPhoto(){
        return this.state.currentPhoto === 2;
    }

    previous = () => {
        let currentPhoto = this.isFirstPhoto() ? 2 : this.state.currentPhoto - 1;

        this.setState({
            currentPhoto: currentPhoto
        })
    }

    next = () => {
        let currentPhoto = this.isLastPhoto() ? 0 : this.state.currentPhoto + 1;
        this.setState({
            currentPhoto: currentPhoto
        })
    }

    render() {
        return (
            <div>

                <Header />

                <Thumbnails
                    currentPhoto={this.state.currentPhoto}
                    photoSelected={this.photoSelected}/>

                <PhotoControls
                    previous={this.previous}
                    next={this.next}/>

                <Photo
                    currentPhoto={this.state.currentPhoto}
                    previous={this.previous}
                    next={this.next}/>
            </div>
        );
    }
}

export default PhotoBooth;
