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

                <Thumbnails />
                <MainImage />
            </div>
        );
    }
}

export default PhotoBooth;
