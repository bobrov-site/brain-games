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
  const arrayLength = getRandomIntervalBetween(5, 10)
  const firstNumber = getRandomIntervalBetween(1, 20);
  const randomProgression = getRandomIntervalBetween(1, 10);
  result.push(firstNumber)
  for (let i = 1; i < arrayLength; i += 1) {
    result.push(0)
  }
  for (let i = 1; i < arrayLength; i += 1) {
    result[i] = result[i - 1] + randomProgression
  }
  return result
}

const takeRandomElementFromProgression = (progression) => {
  const index = getRandomIntervalBetween(0, progression.length - 1);
  return progression[index]
}

const removeElementFromProgression = (progression, element) => {
  const clientProgression = []
  const index = progression.findIndex((el) => el === element)
  for (let i = 0; i < progression.length; i += 1) {
    if (i !== index) {
      clientProgression.push(progression[i])
    }
    else {
      clientProgression.push('..')
    }
  }
  return clientProgression
}

export {
  getRandomNumber, getRandomOperator, getResultExpression, getRandomExpression,
  getRandomNumbersSameParity, getResultGcd, getResultProgression, takeRandomElementFromProgression,
  removeElementFromProgression
};
