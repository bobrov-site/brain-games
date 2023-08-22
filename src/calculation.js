const getRandomNumber = () => Math.round(Math.random() * 100);

const getRandomIntervalBetween = (min, max) => Math.round(Math.random() * (max - min) + min);

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const getResultGcd = (a, b) => {
  if (b) {
    return getResultGcd(b, a % b);
  }
  return Math.abs(a);
};

const getResultProgression = () => {
  const result = [];
  const arrayLength = getRandomIntervalBetween(5, 10);
  const firstNumber = getRandomIntervalBetween(1, 20);
  const randomProgression = getRandomIntervalBetween(1, 10);
  result.push(firstNumber);
  for (let i = 1; i < arrayLength; i += 1) {
    result.push(0);
  }
  for (let i = 1; i < arrayLength; i += 1) {
    result[i] = result[i - 1] + randomProgression;
  }
  return result;
};

const takeRandomElementFromProgression = (progression) => {
  const index = getRandomIntervalBetween(0, progression.length - 1);
  return progression[index];
};

const removeElementFromProgression = (progression, element) => {
  const clientProgression = [];
  const index = progression.findIndex((el) => el === element);
  for (let i = 0; i < progression.length; i += 1) {
    if (i !== index) {
      clientProgression.push(progression[i]);
    } else {
      clientProgression.push('..');
    }
  }
  return clientProgression;
};

const isPrimeNumber = (number) => {
  let isPrime = true;
  if (number > 1) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  } else if (number === 1) {
    isPrime = false;
  }
  return isPrime;
};

export {
  getRandomNumber, getRandomOperator, getResultGcd, getResultProgression, takeRandomElementFromProgression,
  removeElementFromProgression, isPrimeNumber,
};
