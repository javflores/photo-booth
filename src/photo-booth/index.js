import React, {Component} from 'react';

import Thumbnails from './thumbnails';
import MainImage from './main-image';
import ImageStore from './image-store';

class PhotoBooth extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentImage: 1
        };
    }

    imageSelected = (imageSelected) => {
        this.setState({
            currentImage: imageSelected
        });
    }

    isFirstImage(){
        return this.state.currentImage === 1;
    }

    isLastImage(){
        return this.state.currentImage === ImageStore.allImages.length;
    }

    previous = () => {
        let currentImage = this.isFirstImage() ? 3 : this.state.currentImage - 1;

        this.setState({
            currentImage: currentImage
        })
    }

    next = () => {
        let currentImage = this.isLastImage() ? 1 : this.state.currentImage + 1;
        this.setState({
            currentImage: currentImage
        })
    }

    render() {
        return (
            <div>
                <header className="masthead">
                    <div className="header-content">
                        <div className="header-content-inner">
                            <h1 id="homeHeading">PhotoBooth!</h1>
                            <hr/>
                        </div>
                    </div>
                </header>

                <Thumbnails
                    currentImage={this.state.currentImage}
                    imageSelected={this.imageSelected}/>
                <MainImage
                    currentImage={this.state.currentImage}
                    previous={this.previous}
                    next={this.next}/>
            </div>
        );
    }
}

export default PhotoBooth;
