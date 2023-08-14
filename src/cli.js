import readlineSync from 'readline-sync';

/* eslint no-console: "error" */
console.log('Welcome to the Brain Games!');
const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
export default getName;
