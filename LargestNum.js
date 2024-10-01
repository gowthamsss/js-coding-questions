const arr = [100, 99, 82, 10, 1, 2, 40];

const toFindLarge = (arr) => {
  let largest = arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};
console.log(toFindLarge(arr));
