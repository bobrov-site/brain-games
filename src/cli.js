import readlineSync from 'readline-sync';

/* eslint-disable no-console */
console.log('Welcome to the Brain Games!');
const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export { getName };
