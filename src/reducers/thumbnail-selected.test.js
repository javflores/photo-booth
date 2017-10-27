import thumbnailSelectedReducer from './thumbnail-selected';

describe('Thumbnail selected reducer', () => {
    const allPhotos = [{
        title: "first",
        index: 0
    }, {
        title: "second",
        index: 1
    }, {
        title: "third",
        index: 2
    }];
    const thumbnailIndex = 2;
    it('returns state with selected thumbnail as current', () => {
        let nextState = thumbnailSelectedReducer({
            currentPhoto: allPhotos[0],
            allPhotos: allPhotos
        },{
            index: thumbnailIndex
        });
        expect(nextState.currentPhoto).toEqual(allPhotos[thumbnailIndex]);
    });
});


