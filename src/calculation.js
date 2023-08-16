const getRandomNumber = () => Math.round(Math.random() * 100);
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

const getResultExpression = (expression) => {
  const [firstNumber, operator, secondNumber] = expression;
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
  }
};

export {
  getRandomNumber, getRandomOperator, getResultExpression, getRandomExpression,
};
