let arr = [5, 10, 7, 15, 21, 50, 48, 3];

function findSmallestNum(arr) {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

let result = findSmallestNum(arr);

console.log(result);
