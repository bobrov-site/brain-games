import {
  getName, getWelcome, getAnswer, getSuccess, getFail, getQuestion, getWin, getGameRule,
} from './cli.js';

import {
  getRandomNumber, getRandomExpression, getResultExpression, getRandomNumbersSameParity,
  getResultGcd, getResultProgression, takeRandomElementFromProgression,
  removeElementFromProgression, isPrimeNumber,
} from './calculation.js';

const roundCount = 3;

const getEven = () => {
  getWelcome();
  const name = getName();
  getGameRule('Answer "yes" if the number is even, otherwise answer "no".');
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
    const question = getRandomNumbersSameParity();
    const firstNumber = question[0];
    const secondNumber = question[1];
    getQuestion(question);
    const answer = getAnswer();
    const correctAnswer = getResultGcd(firstNumber, secondNumber);
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

const getProgression = () => {
  getWelcome();
  const name = getName();
  getGameRule('What number is missing in the progression?');
  for (let i = 0; i < roundCount; i += 1) {
    const progression = getResultProgression();
    const randomElementFromProgression = takeRandomElementFromProgression(progression);
    const correctAnswer = randomElementFromProgression;
    const question = removeElementFromProgression(progression, randomElementFromProgression);
    getQuestion(question);
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

const getPrime = () => {
  getWelcome();
  const name = getName();
  getGameRule('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < roundCount; i += 1) {
    const question = getRandomNumber();
    getQuestion(question);
    const answer = getAnswer();
    const correctAnswer = isPrimeNumber(question);
    const correctClientAnswer = correctAnswer === true ? 'yes' : 'no';
    const checkAnswer = answer === 'yes';
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
  getEven, getCalc, getGcd, getProgression, getPrime,
};
