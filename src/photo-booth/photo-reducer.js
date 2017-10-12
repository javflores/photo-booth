import * as actions from './actions';

function getAllPhotos(){
    return [{
        index: 1,
        title: "Baseball",
        tinySrc: "http://lorempixel.com/200/200/sports/1",
        bigSrc: "http://lorempixel.com/500/500/sports/1"
    },
    {
        index: 2,
        title: "Surf",
        tinySrc: "http://lorempixel.com/200/200/sports/2",
        bigSrc: "http://lorempixel.com/500/500/sports/2"
    },
    {
        index: 3,
        title: "Bike",
        tinySrc: "http://lorempixel.com/200/200/sports/3",
        bigSrc: "http://lorempixel.com/500/500/sports/3"
    }];
}

function selectPhoto(index, allPhotos){
    return allPhotos.find((photo) => photo.index === index);
}

function previousPhoto(currentPhoto, allPhotos){
    return currentPhoto.index === 1 ? allPhotos.length : currentPhoto.index - 1;
}

function nextPhoto(currentPhoto, allPhotos){
    return currentPhoto.index === allPhotos.length ? 1 : currentPhoto.index + 1;
}

function randomPhoto(currentPhoto, allPhotos) {
    let random = Math.floor(Math.random() * allPhotos.length) + 1;
    if(random === currentPhoto.index){
        return randomPhoto(currentPhoto, allPhotos);
    }
    else{
        return random;
    }
}

const initialState = {
    currentPhoto: undefined,
    allPhotos: []
}

function photoReducer(state = initialState, action){
    switch(action.type){
        case actions.INIT:
            let allPhotos = getAllPhotos();
            return {
                currentPhoto: selectPhoto(1, allPhotos),
                allPhotos: allPhotos
            };

        case actions.THUMBNAIL_SELECTED:
            return Object.assign({}, state, {
                    currentPhoto: selectPhoto(action.thumbnailIndex, state.allPhotos)
                });

        case actions.PREVIOUS_PHOTO:
            return Object.assign({}, state, {
                currentPhoto: selectPhoto(
                    previousPhoto(state.currentPhoto, state.allPhotos),
                    state.allPhotos
                )
            });

        case actions.NEXT_PHOTO:
            return Object.assign({}, state, {
                currentPhoto: selectPhoto(
                    nextPhoto(state.currentPhoto, state.allPhotos),
                    state.allPhotos
                )
            });

        case actions.RANDOM_PHOTO:
            return Object.assign({}, state, {
                currentPhoto: selectPhoto(
                    randomPhoto(state.currentPhoto, state.allPhotos),
                    state.allPhotos
                )
            });

        default:
            return state;
    }
};

export default photoReducer;


