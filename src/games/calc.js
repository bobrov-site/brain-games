import run from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'What is the result of the expression?';

const getResultExpression = (number1, operator, secondNumber) => {
  switch (operator) {
    case '+':
      return number1 + secondNumber;
    case '-':
      return number1 - secondNumber;
    case '*':
      return number1 * secondNumber;
    default:
      break;
  }
  return false;
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const getQuestionValue = () => {
  const number1 = getRandomNumber(0, 10);
  const operator = getRandomOperator();
  const secondNumber = getRandomNumber(0, 10);
  const question = `${number1} ${operator} ${secondNumber}`;
  const correctAnswer = getResultExpression(number1, operator, secondNumber);
  return [question, String(correctAnswer)];
};

const runCalcGame = () => {
  run(gameRule, getQuestionValue);
};

export default runCalcGame;
