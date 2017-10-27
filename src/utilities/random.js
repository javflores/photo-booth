const random = (currentNumber, maxRandom) => {
    let nextRandom = _random(maxRandom);
    return nextRandom === currentNumber ? random(currentNumber, maxRandom) : nextRandom;
}

const _random = (maxRandom) => {
    return Math.floor(Math.random() * maxRandom) + 1;
}

export {
    random as default,
    _random
};