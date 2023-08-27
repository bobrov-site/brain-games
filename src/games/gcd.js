import run from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getEvenRandomNumber = () => getRandomNumber(0, 5) * 2;

const getOddRandomNumber = () => getEvenRandomNumber() + 1;

const getRandomNumbersSameParity = () => {
  const numbers = [];
  let number1 = 0;
  let number2 = 0;
  if (Math.round(Math.random()) === 1) {
    number1 = getEvenRandomNumber();
    number2 = getEvenRandomNumber();
  } else {
    number1 = getOddRandomNumber();
    number2 = getOddRandomNumber();
  }
  numbers.push(number1, number2);
  return numbers;
};

const getResultGcd = (a, b) => {
  if (b) {
    return getResultGcd(b, a % b);
  }
  return Math.abs(a);
};

const getQuestionValue = () => {
  const question = getRandomNumbersSameParity();
  const number1 = question[0];
  const number2 = question[1];
  const correctAnswer = getResultGcd(number1, number2);
  return [`${number1} ${number2}`, String(correctAnswer)];
};

const runGcdGame = () => {
  run(gameRule, getQuestionValue);
};

export default runGcdGame;
