import React from 'react';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import ImageStore from './image-store';

const Thumbnails = ({currentImage, imageSelected}) => (
    <div className="col-lg-6 col-md-offset-3">
        <Grid>
            <Row>
                {ImageStore.allImages.map((image) => {
                    return (
                        <Col key={image.title} xs={6} md={3}>
                            <Thumbnail
                                className={currentImage === image.index ? "selected" : ""}
                                alt={image.title}
                                src={`${ImageStore.baseUrl}/${ImageStore.thumbnailSize}/${image.src}`}
                                onClick={() => imageSelected(image.index)}/>
                        </Col>
                    )
                }, this)}
            </Row>
        </Grid>
    </div>
);

export default Thumbnails;
