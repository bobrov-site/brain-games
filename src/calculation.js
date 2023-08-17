const getRandomNumber = () => Math.round(Math.random() * 100);

const getEvenRandomNumber = () => getRandomNumber() * 2;

const getOddRandomNumber = () => getEvenRandomNumber() + 1;

const getRandomIntervalBetween = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
} 

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const getRandomExpression = () => {
  const firstNumber = getRandomNumber();
  const operator = getRandomOperator();
  const secondNumber = getRandomNumber();
  return [firstNumber, operator, secondNumber];
};

const getRandomNumbersSameParity = () => {
  const numbers = [];
  let firstNumber = 0;
  let secondNumber = 0;
  if (Math.round(Math.random()) === 1) {
    firstNumber = getEvenRandomNumber();
    secondNumber = getEvenRandomNumber();
  } else {
    firstNumber = getOddRandomNumber();
    secondNumber = getOddRandomNumber();
  }
  numbers.push(firstNumber, secondNumber);
  return numbers;
};

const getResultGcd = (a, b) => {
  if (b) {
    return getResultGcd(b, a % b);
  }
  return Math.abs(a);
};

const getResultExpression = (expression) => {
  const [firstNumber, operator, secondNumber] = expression;
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      break;
  }
  return false;
};

const getResultProgression = () => {
  const result = []
  return result
}

export {
  getRandomNumber, getRandomOperator, getResultExpression, getRandomExpression,
  getRandomNumbersSameParity, getResultGcd,
};
