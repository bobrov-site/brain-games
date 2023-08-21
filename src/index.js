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

export { runGreeting };