import getPhotos from './photo-api';

export function loadPhotos(){
    return {
        type: LOAD,
        photos: getPhotos()
    };
}

export function selectThumbnail(index){
    return {
        type: THUMBNAIL_SELECTED,
        index: index
    };
}

export function nextPhoto(){
    return {
        type: NEXT_PHOTO
    };
}

export function previousPhoto(){
    return {
        type: PREVIOUS_PHOTO
    };
}

export function randomPhoto(){
    return {
        type: RANDOM_PHOTO
    };
}

export const LOAD = "LOAD";
export const THUMBNAIL_SELECTED = 'THUMBNAIL_SELECTED';
export const PREVIOUS_PHOTO = 'PREVIOUS_PHOTO';
export const NEXT_PHOTO = 'NEXT_PHOTO';
export const RANDOM_PHOTO = 'RANDOM_PHOTO';


