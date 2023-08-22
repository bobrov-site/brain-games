const getRandomNumber = () => Math.round(Math.random() * 100);

const getRandomIntervalBetween = (min, max) => Math.round(Math.random() * (max - min) + min);

export {
    getRandomNumber, getRandomIntervalBetween,
};