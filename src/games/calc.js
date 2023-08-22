import { getRandomNumber } from "../utils.js";

import run from "../index.js";

const gameRule = 'What is the result of the expression?'

const getResultExpression = (firstNumber, operator, secondNumber) => {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        default:
            break;
    }
    return false;
};

const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    return operators[Math.floor(Math.random() * operators.length)];
}

const getQuestionValue = () => {
    const firstNumber = getRandomNumber();
    const operator = getRandomOperator();
    const secondNumber = getRandomNumber();
    const question = `${firstNumber} ${operator} ${secondNumber}`;
    const correctAnswer = getResultExpression(firstNumber, operator, secondNumber)
    return [question, String(correctAnswer)];
}

const runCalcGame = () => {
    run(gameRule, getQuestionValue);
}

export default runCalcGame