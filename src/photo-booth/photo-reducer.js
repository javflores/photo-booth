function getAllPhotos(){
    return [{
        index: 1,
        title: "Baseball",
        tinySrc: "http://lorempixel.com/200/200/sports/1",
        bigSrc: "http://lorempixel.com/500/500/sports/1",
        selected: true
    },
    {
        index: 2,
        title: "Surf",
        tinySrc: "http://lorempixel.com/200/200/sports/2",
        bigSrc: "http://lorempixel.com/500/500/sports/2",
        selected: false
    },
    {
        index: 3,
        title: "Bike",
        tinySrc: "http://lorempixel.com/200/200/sports/3",
        bigSrc: "http://lorempixel.com/500/500/sports/3",
        selected: false}];
}

function selectPhoto(index, allPhotos){
    return {
        index: index,
        photo: allPhotos.find((photo) => photo.index === index)
    };
}

function previousPhoto(currentPhoto, allPhotos){
    return currentPhoto.index === 1 ? allPhotos.length : currentPhoto.index - 1;
}

function nextPhoto(currentPhoto, allPhotos){
    return currentPhoto.index === allPhotos.length ? 1 : currentPhoto.index + 1;
}

function photoReducer(state, action){
    switch(action.type){
        case 'INIT':
            let allPhotos = getAllPhotos();
            return {
                currentPhoto: selectPhoto(1, allPhotos),
                allPhotos: allPhotos
            };

        case 'THUMBNAIL':
            return {
                currentPhoto: selectPhoto(action.thumbnailIndex, state.allPhotos),
                allPhotos: state.allPhotos
            };

        case 'PREVIOUS':
            const previous = previousPhoto(state.currentPhoto, state.allPhotos);
            return {
                currentPhoto: selectPhoto(previous, state.allPhotos),
                allPhotos: state.allPhotos
            };

        case 'NEXT':
            const nextIndex = nextPhoto(state.currentPhoto, state.allPhotos);

            return {
                currentPhoto: selectPhoto(nextIndex, state.allPhotos),
                allPhotos: state.allPhotos
            };

        default:
            return state;
    }
};

export default photoReducer;


