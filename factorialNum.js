const isFactorial = (num) => {
  let fact = 1;
  if (num === 0) {
    fact = 1;
  }
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

console.log(isFactorial(0));
console.log(isFactorial(5));
