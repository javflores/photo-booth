function selectPhoto(index, allPhotos){
    return allPhotos.find((photo) => photo.index === index);
}

function randomPhoto(currentPhoto, allPhotos) {
    let random = Math.floor(Math.random() * allPhotos.length) + 1;
    return random === currentPhoto.index ? randomPhoto(currentPhoto, allPhotos) : random;
}

export default function (state, _action){
    return Object.assign({}, state, {
        currentPhoto: selectPhoto(
            randomPhoto(state.currentPhoto, state.allPhotos),
            state.allPhotos
        )
    });
}