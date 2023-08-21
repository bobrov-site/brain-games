import { getWelcome, getGameRule, getQuestion, getAnswer, getSuccess, getFail, getWin } from "../cli";
const runGcdGame = () => {
    getWelcome();
    const name = getName();
    getGameRule('Find the greatest common divisor of given numbers.');
    for (let i = 0; i < roundCount; i += 1) {
        const question = getRandomNumbersSameParity();
        const firstNumber = question[0];
        const secondNumber = question[1];
        getQuestion(`${firstNumber} ${secondNumber}`);
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

export default runGcdGame