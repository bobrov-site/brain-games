const runProgressionGame = () => {
    getWelcome();
    const name = getName();
    getGameRule('What number is missing in the progression?');
    for (let i = 0; i < roundCount; i += 1) {
        const progression = getResultProgression();
        const randomElementFromProgression = takeRandomElementFromProgression(progression);
        const correctAnswer = randomElementFromProgression;
        const question = removeElementFromProgression(progression, randomElementFromProgression);
        getQuestion(question.join(' '));
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

export default runProgressionGame