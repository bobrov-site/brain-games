import run from '../index.js';

import getRandomNumber from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getEvenRandomNumber = () => getRandomNumber(0, 5) * 2;

const getOddRandomNumber = () => getEvenRandomNumber() + 1;

const getRandomNumbersSameParity = () => {
  const numbers = [];
  let firstNumber = 0;
  let secondNumber = 0;
  if (Math.round(Math.random()) === 1) {
    firstNumber = getEvenRandomNumber();
    secondNumber = getEvenRandomNumber();
  } else {
    firstNumber = getOddRandomNumber();
    secondNumber = getOddRandomNumber();
  }
  numbers.push(firstNumber, secondNumber);
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
  const firstNumber = question[0];
  const secondNumber = question[1];
  const correctAnswer = getResultGcd(firstNumber, secondNumber);
  return [`${firstNumber} ${secondNumber}`, String(correctAnswer)];
};

const runGcdGame = () => {
  run(gameRule, getQuestionValue);
};

export default runGcdGame;
