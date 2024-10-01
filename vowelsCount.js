const words = "Hello, World!";

const vowelCounts = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  const splittedWords = words.split("");
  console.log(words);
  for (let char of words) {
    if (vowels.includes(char)) count++;
  }
  return count;
};
console.log(vowelCounts(words));
