function selectPhoto(index, allPhotos){
    return allPhotos.find((photo) => photo.index === index);
}

function previousPhoto(currentPhoto, allPhotos){
    return currentPhoto.index === 1 ? allPhotos.length : currentPhoto.index - 1;
}

export default function (state, _action){
    return Object.assign({}, state, {
        currentPhoto: selectPhoto(
            previousPhoto(state.currentPhoto, state.allPhotos),
            state.allPhotos
        )
    });
}


