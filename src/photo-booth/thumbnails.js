import React from 'react';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';

export default ({allPhotos, currentPhoto, photoSelected}) => (
    <div className="col-lg-6 col-md-offset-3">
        <Grid>
            <Row>
                {allPhotos.map((photo) => {
                    return (
                        <Col key={photo.title} xs={6} md={3}>
                            <Thumbnail
                                className={currentPhoto === photo.index ? "selected" : ""}
                                alt={photo.title}
                                src={photo.tinySrc}
                                onClick={() => photoSelected(photo.index)}/>
                        </Col>
                    )
                }, this)}
            </Row>
        </Grid>
    </div>
);
