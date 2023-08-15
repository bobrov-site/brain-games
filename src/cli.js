import readlineSync from 'readline-sync';

/* eslint-disable no-console */

export const getWelcome = () => {
  console.log('Welcome to the Brain Games!');
}
export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getAnswer = () => {

}
