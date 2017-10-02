import React from 'react';
import {Image, Button} from 'react-bootstrap';
import ImageStore from './image-store';

const MainImage = ({currentImage}) => {
    const imageSrc = ImageStore.allImages[currentImage - 1].src;
    return (
        <div className="row">
            <div className="col-lg-6 col-md-offset-3">
                <Button bsStyle="info" className="col-lg-2">Previous</Button>
                <div className="col-lg-8">
                    <Image
                        className="row"
                        src={`${ImageStore.baseUrl}/${ImageStore.bigImage}/${imageSrc}`}
                        title="Title"/>
                    <h2>Your image</h2>
                </div>
                <Button bsStyle="info" className="col-lg-2">Next</Button>
            </div>
        </div>
    );
};

export default MainImage;
