import run from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getResultExpression = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`'Ошибка! Добавьте вычисление для оператора!' ${operator}`);
  }
};

const getRandomOperator = () => operators[getRandomNumber(0, operators.length - 1)];

const getRound = () => {
  const number1 = getRandomNumber(0, 10);
  const operator = getRandomOperator();
  const number2 = getRandomNumber(0, 10);
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(getResultExpression(number1, operator, number2));
  return [question, correctAnswer];
};

const runCalcGame = () => {
  run(gameRule, getRound);
};

export default runCalcGame;
