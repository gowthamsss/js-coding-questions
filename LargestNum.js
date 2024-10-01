let arr = [10, 99, 872, 100, 1, 2, 40];
// let arr = ["10", "99", "882", "100", "1", "2", "40"];

const toFindLarge = (arr) => {
  arr = arr.map(Number); // if arr of strings is an input , map and convert it into Number
  let largest = arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};
console.log(toFindLarge(arr));
