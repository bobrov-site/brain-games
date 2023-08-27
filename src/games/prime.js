import run from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  let isPrime = true;
  if (number > 1) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  } else if (number === 1) {
    isPrime = false;
  }
  return isPrime;
};

const getRound = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrimeNumber(question) === true ? 'yes' : 'no';
  return [question, String(correctAnswer)];
};

const runPrimeGame = () => {
  run(gameRule, getRound);
};

export default runPrimeGame;
