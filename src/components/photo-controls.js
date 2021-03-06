import React from 'react';
import {Button} from 'react-bootstrap';

export default ({previous, next, random}) => {
    return (
        <div className="col-lg-6 col-md-offset-3">
            <Button
                id="previous"
                bsStyle="info"
                className="col-lg-2"
                onClick={() => previous()}>
                Previous
            </Button>
            <Button
                id="next"
                bsStyle="info"
                className="col-lg-2"
                onClick={() => next()}>
                Next
            </Button>
            <Button
                id="random"
                bsStyle="info"
                className="col-lg-2"
                onClick={() => random()}>
                Random
            </Button>
        </div>
    );
};
