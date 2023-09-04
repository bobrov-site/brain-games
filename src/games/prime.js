import run from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getRound = () => {
  const number = getRandomNumber(0, 100);
  const correctAnswer = isPrimeNumber(number) === true ? 'yes' : 'no';
  return [String(number), String(correctAnswer)];
};

const runPrimeGame = () => {
  run(gameRule, getRound);
};

export default runPrimeGame;
