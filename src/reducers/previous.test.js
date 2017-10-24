import previousReducer from './previous';

describe('Previous reducer', () => {
    const allPhotos = [{
        title: "first",
        index: 1
    }, {
        title: "second",
        index: 2
    }, {
        title: "third",
        index: 3
    }];
    it('returns state with previous photo as current', () => {
        let nextState = previousReducer({
            currentPhoto: allPhotos[1],
            allPhotos: allPhotos
        },{});
        expect(nextState.currentPhoto).toEqual(allPhotos[0]);
    });
});


