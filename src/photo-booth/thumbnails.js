import React from 'react';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';

function isSelectedPhoto(thumbnail, currentPhoto) {
    return thumbnail.index === currentPhoto.index;
}

export default ({allPhotos, currentPhoto, thumbnailSelected}) => (
    <div className="col-lg-6 col-md-offset-3">
        <Grid>
            <Row>
                {allPhotos.map((photo) => {
                    return (
                        <Col key={photo.title} xs={6} md={3}>
                            <Thumbnail
                                className={isSelectedPhoto(photo, currentPhoto) ? "selected" : ""}
                                alt={photo.title}
                                src={photo.tinySrc}
                                onClick={() => thumbnailSelected(photo.index)}/>
                        </Col>
                    )
                }, this)}
            </Row>
        </Grid>
    </div>
);
