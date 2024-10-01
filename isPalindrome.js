let str = "racecar";

const isPalindrome = (str) => {
  //   str = str.toLowerCase();                      // to make all string value as lowercase if required
  const result = str.split("").reverse().join("");
  if (str === result)
    return `${str} is a palindrome`; // template literal format using ES6 concept
  else return `${str} is not a palindrome`;
};
console.log(isPalindrome(str));
