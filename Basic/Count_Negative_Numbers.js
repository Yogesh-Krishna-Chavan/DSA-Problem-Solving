//Count of negative numbers in the array

let arr = [2, -3, 4, -5, 6, -7, -8, -9];

function countNegative(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

let result = countNegative(arr);
console.log(result);
