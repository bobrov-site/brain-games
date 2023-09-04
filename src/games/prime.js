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
  const question = getRandomNumber(0, 100);
  const correctAnswer = isPrimeNumber(question) === true ? 'yes' : 'no';
  return [String(question), String(correctAnswer)];
};

const runPrimeGame = () => {
  run(gameRule, getRound);
};

export default runPrimeGame;
