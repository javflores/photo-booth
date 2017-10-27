import loadReducer from './load';

describe('Load reducer', () => {
    const allPhotos = ["first", "second", "third"];
    it('returns state with first photo', () => {
        let nextState = loadReducer({}, {
            photos: allPhotos
        });
        expect(nextState.allPhotos).toEqual(allPhotos);
        expect(nextState.currentPhoto).toEqual(allPhotos[0]);
    });
});


