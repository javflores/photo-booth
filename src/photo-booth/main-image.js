import React from 'react';
import {Image, Button} from 'react-bootstrap';

const MainImage = () => (
    <div className="row">
        <div className="col-lg-6 col-md-offset-3">
            <Button bsStyle="info" className="col-lg-2">Previous</Button>
            <div className="col-lg-8">
                <Image
                    className="row"
                    src="http://lorempixel.com/500/500/sports/1"
                    title="Title"/>
                <h2>Your image</h2>
            </div>
            <Button bsStyle="info" className="col-lg-2">Next</Button>
        </div>
    </div>
);

export default MainImage;
