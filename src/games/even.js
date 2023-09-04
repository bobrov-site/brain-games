import run from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (a) => a % 2 === 0;

const getRound = () => {
  const number = getRandomNumber(0, 100);
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEvenGame = () => {
  run(gameRule, getRound);
};

export default runEvenGame;
