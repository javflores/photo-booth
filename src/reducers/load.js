export default function (state, action){
    return {
        currentPhoto: action.photos[0],
        allPhotos: action.photos
    };
}


