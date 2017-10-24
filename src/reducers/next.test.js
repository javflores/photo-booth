import nextReducer from './next';

describe('Next reducer', () => {
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
    it('returns state with next photo as current', () => {
        let nextState = nextReducer({
            currentPhoto: allPhotos[0],
            allPhotos: allPhotos
        },{});
        expect(nextState.currentPhoto).toEqual(allPhotos[1]);
    });
});


