import React from 'react';
import {Image} from 'react-bootstrap';
import withGraphQL from '../graphql/with-graphql';

const Photo = ({currentPhoto, data}) => {
    if(!data) return null;

    const photoMetadata = getCurrentPhotoMetadata(currentPhoto, data.organization.members.nodes);
    return (
        <div className="row">
            <div className="col-lg-12">
                <h2>{photoMetadata.title}</h2>
                <Image
                    className="row"
                    src={photoMetadata.src}
                    title={photoMetadata.title}/>
            </div>
        </div>
    );
};

function getCurrentPhotoMetadata(currentPhoto, photos) {
    const photo = photos[currentPhoto];
    return {
        src: photo.avatarUrl,
        title: photo.name
    };
};

const query = 'query($login:String!) { organization(login:$login) { members(first: 3) { nodes { name avatarUrl } } } }';
const params = { variables: {"login": "findmypast" }};

export default withGraphQL(query, params)(Photo);
