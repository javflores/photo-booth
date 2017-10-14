import React from 'react';
import {Image} from 'react-bootstrap';

export default ({photo}) => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <h2>{photo.title}</h2>
            </div>
            <Image
                className="row"
                src={photo.bigSrc}
                title={photo.title}/>
        </div>
    );
};
