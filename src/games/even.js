import run from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRound = () => {
  const number = getRandomNumber(0, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [number, correctAnswer];
};

const runEvenGame = () => {
  run(gameRule, getRound);
};

export default runEvenGame;
