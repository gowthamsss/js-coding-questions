let arr = [1, 2, 3, 4, 4, 5, 6, 7, 6];

const removeDuplicates = (arr) => {
  let uniqueEle = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueEle.indexOf(arr[i]) === -1) {
      uniqueEle.push(arr[i]);
    }
  }
  return uniqueEle;
};

console.log(removeDuplicates(arr)); // output [1, 2, 3, 4, 5, 6, 7]
