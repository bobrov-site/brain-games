import run from '../index.js';

import getRandomNumber from '../utils.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionValue = () => {
  const randomNumber = getRandomNumber(0, 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const runEvenGame = () => {
  run(gameRule, getQuestionValue);
};

export default runEvenGame;
