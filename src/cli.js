import { getWelcome, getName } from "./utils.js";

const runGreeting = () => {
  console.log('Welcome to the Brain Games!');
  getWelcome();
  getName();
};

export default runGreeting