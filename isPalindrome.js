// let str = "racecar";

// const isPalindrome = (str) => {
//   //   str = str.toLowerCase();                      // to make all string value as lowercase if required
//   const result = str.split("").reverse().join("");
//   if (str === result)
//     return `${str} is a palindrome`; // template literal format using ES6 concept
//   else return `${str} is not a palindrome`;
// };
// console.log(isPalindrome(str));

let str = "madam";
const reverseAStr = (str) => {
  let reversedStr = "";
  // str = str.toLowerCase();
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  if (str === reversedStr) return `${str} is a palindrome`;
  else return `${str} is not a palindrome`;
};

console.log(reverseAStr(str));
