import run from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getResultGcd = (a, b) => {
  if (b) {
    return getResultGcd(b, a % b);
  }
  return Math.abs(a);
};

const getRound = () => {
  const number1 = getRandomNumber(0, 10);
  const number2 = getRandomNumber(0, 10);
  const correctAnswer = getResultGcd(number1, number2);
  return [`${number1} ${number2}`, String(correctAnswer)];
};

const runGcdGame = () => {
  run(gameRule, getRound);
};

export default runGcdGame;
