const getRandomNumber = () => Math.round(Math.random() * 100);

const getRandomIntervalBetween = (min, max) => Math.round(Math.random() * (max - min) + min);
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
  getRandomNumber, getRandomIntervalBetween, isPrimeNumber,
};
