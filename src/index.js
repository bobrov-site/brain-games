import {
  getName, getWelcome, getAnswer, getSuccess, getFail, getQuestion, getWin, getGameRule,
  changeYesOrNoFormatAnswerToBoolean,
} from './cli.js';

import {
  getRandomNumber, getRandomExpression, getResultExpression, getRandomNumbersSameParity,
  getResultGcd, getResultProgression, takeRandomElementFromProgression,
  removeElementFromProgression, isPrimeNumber,
} from './calculation.js';

const roundCount = 3;

const runGreeting = () => {
  getWelcome();
  getName();
};

const runProgressionGame = () => {
  getWelcome();
  const name = getName();
  getGameRule('What number is missing in the progression?');
  for (let i = 0; i < roundCount; i += 1) {
    const progression = getResultProgression();
    const randomElementFromProgression = takeRandomElementFromProgression(progression);
    const correctAnswer = randomElementFromProgression;
    const question = removeElementFromProgression(progression, randomElementFromProgression);
    getQuestion(question.join(' '));
    const answer = getAnswer();
    if (Number(answer) === Number(correctAnswer)) {
      getSuccess();
    } else {
      getFail(answer, correctAnswer, name);
      break;
    }
    if (i === 2) {
      getWin(name);
    }
  }
};

const runPrimeGame = () => {
  getWelcome();
  const name = getName();
  getGameRule('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < roundCount; i += 1) {
    const question = getRandomNumber();
    getQuestion(question);
    const answer = getAnswer();
    const correctAnswer = isPrimeNumber(question);
    const correctClientAnswer = correctAnswer === true ? 'yes' : 'no';
    const checkAnswer = changeYesOrNoFormatAnswerToBoolean(answer);
    if (checkAnswer === correctAnswer) {
      getSuccess();
    } else {
      getFail(answer, correctClientAnswer, name);
      break;
    }
    if (i === 2) {
      getWin(name);
    }
  }
};

export {
  runGcdGame, runProgressionGame, runPrimeGame, runGreeting,
};
