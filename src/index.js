import {
  getName, getWelcome, getAnswer, getSuccess, getFail, getQuestion, getWin,
} from './cli.js';

import { getRandomNumber, getRandomExpression, getResultExpression } from './calculation.js';

const getEven = () => {
  getWelcome();
  const answerCount = 3;
  const name = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < answerCount; i += 1) {
    const randomNumber = getRandomNumber();
    getQuestion(randomNumber);
    const answer = getAnswer();
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if ((randomNumber % 2 === 0 && answer === 'yes') || (randomNumber % 2 !== 0 && answer === 'no')) {
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

const getCalc = () => {
  const answerCount = 3;
  getWelcome();
  const name = getName();
  console.log('What is the result of the expression?');
  for (let i = 0; i < answerCount; i += 1) {
    const expression = getRandomExpression();
    const question = `${expression[0]} ${expression[1]} ${expression[2]}`;
    getQuestion(question);
    const answer = getAnswer();
    const correctAnswer = getResultExpression(expression);
    console.log(correctAnswer);
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

export { getEven, getCalc };
