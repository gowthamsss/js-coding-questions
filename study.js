// let str = "hi, am gowtham";

// const reverseAStr = (str) => {
//   return str.split("").reverse().join("");
// };

// console.log(reverseAStr(str));

//------------------------

let str = "hi, am gowtham";
const reverseAStr = (str) => {
  let reversedStr = "";
  //   str = str.replace(/,/g, "");                // to remove commas
  // str = str.replace(/[^a-zA-Z0-9\s]/g, "");   // to remove all spl chars, only accept alphabets, number and spaces.

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
};

console.log(reverseAStr(str));
// output : mahtwog ma ,ih
