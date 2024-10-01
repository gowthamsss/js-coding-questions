const words = "Hello, World!";

const vowelCounts = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of words.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
};
console.log(vowelCounts(words));
