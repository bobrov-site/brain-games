import {
  getName, getWelcome, getAnswer, getSuccess, getFail, getQuestion, getWin, getGameRule
} from './cli.js';

import { getRandomNumber, getRandomExpression, getResultExpression, getRandomNumbersSameParity } from './calculation.js';

const roundCount = 3

const getEven = () => {
  getWelcome();
  const name = getName();
  getGameRule('Answer "yes" if the number is even, otherwise answer "no".')
  for (let i = 0; i < roundCount; i += 1) {
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
  getWelcome();
  const name = getName();
  getGameRule('What is the result of the expression?');
  for (let i = 0; i < roundCount; i += 1) {
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

const getGcd = () => {
  getWelcome();
  const name = getName();
  getGameRule('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < roundCount; i += 1) {
    const question = getRandomNumbersSameParity()
    getQuestion(question)
  }
}

export { getEven, getCalc, getGcd };
