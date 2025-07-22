let arr = [5, 10, 7, 15, 21, 50, 48, 3];

function secondLargestNum(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    }
    else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
  // return firstLargest;
}

let result = secondLargestNum(arr);

console.log(result);
