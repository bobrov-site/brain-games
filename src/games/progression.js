import run from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'What number is missing in the progression?';

const getRandomIndex = (progression) => getRandomNumber(0, progression.length - 1);

const buildProgression = () => {
  const progression = [];
  const length = getRandomNumber(10, 10);
  const startNumber = getRandomNumber(1, 20);
  const step = getRandomNumber(3, 10);
  progression.push(startNumber);
  for (let i = 1; i < length; i += 1) {
    progression[i] = startNumber + step * i;
  }
  const randomIndex = getRandomIndex(progression);
  const randomNumber = progression[randomIndex];
  progression[randomIndex] = '..';
  return [progression, randomNumber];
};

const getRound = () => {
  const [progression, number] = buildProgression();
  const question = progression.join(' ');
  const correctAnswer = String(number);
  return [question, correctAnswer];
};

const runProgressionGame = () => {
  run(gameRule, getRound);
};
export default runProgressionGame;
