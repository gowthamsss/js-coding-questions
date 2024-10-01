// Find the str is anagram or not using sort method

// let str1 = "listean";
// let str2 = "silent";

// const isAnagram = (str1, str2) => {
//   const sortedStr1 = str1.split("").sort().join("");
//   const sortedStr2 = str2.split("").sort().join("");

//   return sortedStr1 === sortedStr2;
// };
// console.log(isAnagram(str1, str2));

//------------------------------------------------------------------

// without using sort method

let str1 = "listen";
let str2 = "silent";

function bubbleSortString(str) {
  let arr = str.toString().split(""); // Convert string or number to array
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr.join(""); // Convert array back to string
}
const isAnagram = (str1, str2) => {
  const sortedStr1 = bubbleSortString(str1);
  const sortedStr2 = bubbleSortString(str2);
  return sortedStr1 === sortedStr2;
};
console.log(isAnagram(str1, str2));
