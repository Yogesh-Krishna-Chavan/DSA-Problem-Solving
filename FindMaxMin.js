let myArray = [3, 2, 4, 1];

function findMaxMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [max, min];
}

console.log(findMaxMin(myArray));
