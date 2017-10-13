function selectPhoto(index, allPhotos){
    return allPhotos.find((photo) => photo.index === index);
}

function nextPhoto(currentPhoto, allPhotos){
    return currentPhoto.index === allPhotos.length ? 1 : currentPhoto.index + 1;
}

export default function (state, _action){
    return Object.assign({}, state, {
        currentPhoto: selectPhoto(
            nextPhoto(state.currentPhoto, state.allPhotos),
            state.allPhotos
        )
    });
}


