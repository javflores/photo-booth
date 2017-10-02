import React from 'react';
import {Image, Button} from 'react-bootstrap';
import ImageStore from './image-store';

const MainImage = ({currentImage, previous, next}) => {
    const imageMetadata = getCurrentImageMetadata(currentImage);
    return (
        <div className="row">
            <div className="col-lg-6 col-md-offset-3">
                <Button bsStyle="info"
                        className="col-lg-2"
                        onClick={() => previous()}>
                    Previous
                </Button>
                <div className="col-lg-8">
                    <h2>{imageMetadata.title}</h2>
                    <Image
                        className="row"
                        src={`${ImageStore.baseUrl}/${ImageStore.bigImage}/${imageMetadata.src}`}
                        title={imageMetadata.title}/>
                </div>
                <Button
                    bsStyle="info"
                    className="col-lg-2"
                    onClick={() => next()}>
                    Next
                </Button>
            </div>
        </div>
    );
};

function getCurrentImageMetadata(currentImage) {
    const image = ImageStore.allImages[currentImage - 1];
    return {
        src: image.src,
        title: image.title
    };
};

export default MainImage;
