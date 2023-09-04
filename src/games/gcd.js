import run from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b > 0) {
    return getGcd(b, a % b);
  }
  return Math.abs(a);
};

const getRound = () => {
  const number1 = getRandomNumber(0, 10);
  const number2 = getRandomNumber(0, 10);
  const correctAnswer = String(getGcd(number1, number2));
  const question = `${number1} ${number2}`;
  return [question, correctAnswer];
};

const runGcdGame = () => {
  run(gameRule, getRound);
};

export default runGcdGame;
