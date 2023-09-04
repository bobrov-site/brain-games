import run from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'What number is missing in the progression?';

const buildProgression = () => {
  const progression = [];
  const length = getRandomNumber(10, 10);
  const startNumber = getRandomNumber(1, 20);
  const step = getRandomNumber(3, 10);
  progression.push(startNumber);
  for (let i = 1; i < length; i += 1) {
    progression[i] = startNumber + step * i;
  }
  return progression;
};

const getRandomIndex = (progression) => getRandomNumber(0, progression.length - 1);

const getRound = () => {
  const progression = buildProgression();
  const randomElementFromProgression = takeRandomElementFromProgression(progression);
  const correctAnswer = randomElementFromProgression;
  const question = removeElementFromProgression(progression, randomElementFromProgression);
  return [question.join(' '), String(correctAnswer)];
};

const runProgressionGame = () => {
  run(gameRule, getRound);
};
export default runProgressionGame;
