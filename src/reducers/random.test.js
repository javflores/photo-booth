import * as randomGenerator from '../utilities/random';

describe('Random reducer', () => {
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
    const randomNumber = 1;
    let random = require('./random').default;
    randomGenerator.default = jest.fn().mockReturnValue(randomNumber);

    it('returns state with random photo', () => {
        let nextState = random({
            currentPhoto: allPhotos[2],
            allPhotos: allPhotos
        },{});
        expect(nextState.currentPhoto).toEqual(allPhotos[randomNumber-1]);
    });
});


