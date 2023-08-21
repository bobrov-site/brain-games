import { getWelcome, getGameRule, getQuestion, getAnswer, getSuccess, getFail, getWin } from "../cli.js";
const runPrimeGame = () => {
    getWelcome();
    const name = getName();
    getGameRule('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 0; i < roundCount; i += 1) {
        const question = getRandomNumber();
        getQuestion(question);
        const answer = getAnswer();
        const correctAnswer = isPrimeNumber(question);
        const correctClientAnswer = correctAnswer === true ? 'yes' : 'no';
        const checkAnswer = changeYesOrNoFormatAnswerToBoolean(answer);
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

export default runPrimeGame