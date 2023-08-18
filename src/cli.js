import readlineSync from 'readline-sync';

/* eslint-disable no-console */

const getWelcome = () => {
  console.log('Welcome to the Brain Games!');
};
const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const getQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const getFail = (answer, correctAnswer, name) => {
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${name}`);
};

const getSuccess = () => {
  console.log('Correct!');
};

const getWin = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const getGameRule = (rule) => {
  console.log(rule);
};

const changeYesOrNoFormatAnswerToBoolean = (answer) => {
  if (answer === 'yes') {
    return true
  }
  else if (answer === 'no') {
    return false
  }
  else {
    return false
  }
}

export {
  getWelcome, getName, getAnswer, getSuccess, getWin, getFail, getQuestion, getGameRule, changeYesOrNoFormatAnswerToBoolean
};
