import React from 'react';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import withGraphQL from '../graphql/with-graphql';

const Thumbnails = ({currentPhoto, photoSelected, data}) => {
    if(!data) return null;

    return (
        <div className="col-lg-6 col-md-offset-3">
            <Grid>
                <Row>
                    {data.organization.members.nodes.map((photo, index) => {
                        return (
                            <Col key={photo.name} xs={6} md={3}>
                                <Thumbnail
                                    className={currentPhoto === index ? "selected" : ""}
                                    alt={photo.name}
                                    src={photo.avatarUrl}
                                    onClick={() => photoSelected(index)}/>
                            </Col>
                        )
                    }, this)}
                </Row>
            </Grid>
        </div>
    )
};

const query = 'query($login:String!) { organization(login:$login) { members(first: 3) { nodes { name avatarUrl } } } }';
const params = { variables: {"login": "findmypast" }};

export default withGraphQL(query, params)(Thumbnails);
