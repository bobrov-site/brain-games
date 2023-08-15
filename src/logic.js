import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.round(Math.random() * 100);

const getQuestion = (randomNumber) => {
  console.log(`Question: ${randomNumber}`);
};

const getLogic = () => {
  console.log('Welcome to the Brain Games!');
  const answerCount = 3;
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < answerCount; i += 1) {
    const randomNumber = getRandomNumber();
    getQuestion(randomNumber);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if ((randomNumber % 2 === 0 && answer === 'yes') || (randomNumber % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default getLogic;
