import { getWelcome, getGameRule, getQuestion, getAnswer, getSuccess, getFail, getWin } from "../cli.js";

import { getRandomExpression, getResultExpression } from "../calculation.js";
const runCalcGame = () => {
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

export default runCalcGame