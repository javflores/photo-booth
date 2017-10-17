import nextRandom from '../utilities/random';

function selectPhoto(index, allPhotos){
    return allPhotos.find((photo) => photo.index === index);
}

export default function (state, _action){
    return Object.assign({}, state, {
        currentPhoto: selectPhoto(
            nextRandom(state.currentPhoto.index, state.allPhotos.length),
            state.allPhotos
        )
    });
}