let str = "I Love javascript, a lot";

const largestWord = (str) => {
  let largest = "";
  //   str = str.replace(/,/g, "");  // replace comma with empty string
  const words = str.split(" "); // split the str into array of str ans store it in a words variable
  for (let word of words) {
    if (word.length > largest.length) largest = word;
  }
  return largest;
};

console.log(largestWord(str));
