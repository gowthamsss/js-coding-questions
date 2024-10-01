const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const primeNumSeries = (num) => {
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) console.log(i);
  }
};
console.log(primeNumSeries(50));
