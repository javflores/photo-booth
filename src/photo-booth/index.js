import React, {Component} from 'react';

import Thumbnails from './thumbnails';
import MainImage from './main-image';

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
                    currentImage={this.state.currentImage}/>
            </div>
        );
    }
}

export default PhotoBooth;
