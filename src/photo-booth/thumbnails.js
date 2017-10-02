import React from 'react';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import ImageStore from './image-store';

const Thumbnails = ({current}) => (
    <div className="col-lg-6 col-md-offset-3">
        <Grid>
            <Row>
                {ImageStore.allImages.map((image) => {
                    return (
                        <Col key={image.title} xs={6} md={3}>
                            <Thumbnail
                                alt={image.title}
                                src={`${ImageStore.baseUrl}/${ImageStore.thumbnailSize}/${image.src}`} />
                        </Col>
                    )
                })}
            </Row>
        </Grid>
    </div>
);

export default Thumbnails;
