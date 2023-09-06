import run from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'What number is missing in the progression?';

const getRandomIndex = (progression) => getRandomNumber(0, progression.length - 1);

const buildProgression = (startNumber, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression[i] = startNumber + step * i;
  }
  return progression;
};

const getRound = () => {
  const length = getRandomNumber(10, 10);
  const startNumber = getRandomNumber(1, 20);
  const step = getRandomNumber(3, 10);
  const progression = buildProgression(startNumber, step, length);
  const index = getRandomIndex(progression);
  const number = progression[index];
  progression[index] = '..';
  const question = progression.join(' ');
  const correctAnswer = String(number);
  return [question, correctAnswer];
};

const runProgressionGame = () => {
  run(gameRule, getRound);
};
export default runProgressionGame;
