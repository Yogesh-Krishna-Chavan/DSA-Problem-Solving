let arr = [5, 10, 7, 15, 21, -50, 48];

function findLargestNum(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let result = findLargestNum(arr);

console.log(result);
