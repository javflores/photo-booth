import React, {Component} from 'react';

import * as actions from '../actions';

import Thumbnails from './thumbnails';
import Photo from './photo';
import Header from './header';
import PhotoControls from './photo-controls';

class PhotoBooth extends Component {
    constructor(props){
        super(props);
        this.state = props.store.getState();
        props.store.subscribe(this.updatePhotoBooth);
    }

    updatePhotoBooth = () => {
        this.setState(this.props.store.getState());
    }

    thumbnailSelected(thumbnailIndex){
        this.props.store.dispatch(actions.selectThumbnail(thumbnailIndex));
    }

    previous = () => {
        this.props.store.dispatch(actions.previousPhoto());
    }

    next = () => {
        console.log("dafdas sdf")
        this.props.store.dispatch(actions.nextPhoto());
    }

    random = () => {
        this.props.store.dispatch(actions.randomPhoto());
    }

    componentDidMount(){
        this.props.store.dispatch(actions.loadPhotos());
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
