import random from './random';

describe('Random generator', () => {
    let previousRandom;
    const maxRandom = 20;
    beforeAll(() => {
        previousRandom = random(1, maxRandom);
    });

    it('returns a new random number every time', () => {
        let nextRandom = random(previousRandom, maxRandom);

        expect(nextRandom).not.toBe(previousRandom);
    });

    it('returns a random within limits', () => {
        let nextRandom = random(previousRandom, maxRandom);

        expect(nextRandom).toBeLessThanOrEqual(maxRandom);
        expect(nextRandom).toBeGreaterThanOrEqual(1);
    });
});


