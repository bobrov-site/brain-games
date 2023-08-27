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
      throw new Error('Ошибка! Добавьте вычисление для оператора!');
  }
};

const getRandomOperator = () => {
  return operators[Math.floor(Math.random() * operators.length)];
};

const getQuestionValue = () => {
  const number1 = getRandomNumber(0, 10);
  const operator = getRandomOperator();
  const number2 = getRandomNumber(0, 10);
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = getResultExpression(number1, operator, number2);
  return [question, String(correctAnswer)];
};

const runCalcGame = () => {
  run(gameRule, getQuestionValue);
};

export default runCalcGame;
