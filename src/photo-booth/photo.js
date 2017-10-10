import React from 'react';
import {Image} from 'react-bootstrap';
import PhotoStore from './photo-store';

export default ({currentPhoto}) => {
    const photoMetadata = getCurrentPhotoMetadata(currentPhoto);
    return (
        <div className="row">
            <div className="col-lg-12">
                <h2>{photoMetadata.title}</h2>
            </div>
            <Image
                className="row"
                src={`${PhotoStore.baseUrl}/${PhotoStore.bigImage}/${photoMetadata.src}`}
                title={photoMetadata.title}/>
        </div>
    );
};

function getCurrentPhotoMetadata(currentPhoto) {
    const photo = PhotoStore.allPhotos[currentPhoto - 1];
    return {
        src: photo.src,
        title: photo.title
    };
};
