import run from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (a) => a % 2 === 0;

const getRound = () => {
  const question = String(getRandomNumber(0, 100));
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEvenGame = () => {
  run(gameRule, getRound);
};

export default runEvenGame;
