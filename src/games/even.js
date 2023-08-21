import { getWelcome, getGameRule, getQuestion, getAnswer, getSuccess, getFail, getWin } from "../cli.js";
import { getRandomNumber } from "../calculation.js";
const runEvenGame = () => {
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

export default runEvenGame