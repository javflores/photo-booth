function selectPhoto(index, allPhotos){
    return allPhotos.find((photo) => photo.index === index);
}

export default function (state, action){
    return Object.assign({}, state, {
        currentPhoto: selectPhoto(action.index, state.allPhotos)
    });
}


